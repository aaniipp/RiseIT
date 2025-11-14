// RiseIT Consulting API Endpoints
// Node.js Express server for handling form submissions and database operations

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const validator = require('validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'riseit_consulting',
    charset: 'utf8mb4'
};

// Create database connection pool
const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Validation helper functions
const validateEmail = (email) => {
    return validator.isEmail(email);
};

const validatePhone = (phone) => {
    return validator.isMobilePhone(phone, 'id-ID');
};

const sanitizeInput = (input) => {
    return validator.escape(input);
};

// API Routes

// Mentee Application Submission
app.post('/api/mentee-application', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            university,
            major,
            motivation
        } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !phone || !university || !major || !motivation) {
            return res.status(400).json({ 
                success: false, 
                message: 'All required fields must be filled' 
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        if (!validatePhone(phone)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid phone number format' 
            });
        }

        // Sanitize inputs
        const sanitizedData = {
            firstName: sanitizeInput(firstName),
            lastName: sanitizeInput(lastName),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            university: sanitizeInput(university),
            major: sanitizeInput(major),
            motivation: sanitizeInput(motivation)
        };

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO mentee_applications 
             (first_name, last_name, email, phone, university, major, motivation) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                sanitizedData.firstName,
                sanitizedData.lastName,
                sanitizedData.email,
                sanitizedData.phone,
                sanitizedData.university,
                sanitizedData.major,
                sanitizedData.motivation
            ]
        );

        res.status(201).json({
            success: true,
            message: 'Mentee application submitted successfully',
            applicationId: result.insertId
        });

    } catch (error) {
        console.error('Error submitting mentee application:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Associate Application Submission
app.post('/api/associate-application', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            positionAppliedFor,
            motivation,
            relevantExperience
        } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !positionAppliedFor || !motivation) {
            return res.status(400).json({ 
                success: false, 
                message: 'All required fields must be filled' 
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        const validPositions = ['president', 'co-president', 'head-medcom', 'co-head-medcom', 'head-people', 'head-product'];
        if (!validPositions.includes(positionAppliedFor)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid position selected' 
            });
        }

        // Sanitize inputs
        const sanitizedData = {
            firstName: sanitizeInput(firstName),
            lastName: sanitizeInput(lastName),
            email: sanitizeInput(email),
            positionAppliedFor: sanitizeInput(positionAppliedFor),
            motivation: sanitizeInput(motivation),
            relevantExperience: sanitizeInput(relevantExperience || '')
        };

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO associate_applications 
             (first_name, last_name, email, position_applied_for, motivation, relevant_experience) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                sanitizedData.firstName,
                sanitizedData.lastName,
                sanitizedData.email,
                sanitizedData.positionAppliedFor,
                sanitizedData.motivation,
                sanitizedData.relevantExperience
            ]
        );

        res.status(201).json({
            success: true,
            message: 'Associate application submitted successfully',
            applicationId: result.insertId
        });

    } catch (error) {
        console.error('Error submitting associate application:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// RiseTalk Registration
app.post('/api/risetalk-registration', async (req, res) => {
    try {
        const {
            eventId,
            firstName,
            lastName,
            email,
            phone,
            organization,
            motivation
        } = req.body;

        // Validation
        if (!eventId || !firstName || !lastName || !email || !phone || !organization || !motivation) {
            return res.status(400).json({ 
                success: false, 
                message: 'All required fields must be filled' 
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        if (!validatePhone(phone)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid phone number format' 
            });
        }

        // Check if event exists and has space
        const [eventCheck] = await pool.execute(
            'SELECT max_participants FROM risetalk_events WHERE event_id = ? AND is_active = TRUE',
            [eventId]
        );

        if (eventCheck.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: 'Event not found or not active' 
            });
        }

        // Check current registrations
        const [registrationCount] = await pool.execute(
            'SELECT COUNT(*) as count FROM risetalk_registrations WHERE event_id = ? AND status != "cancelled"',
            [eventId]
        );

        if (registrationCount[0].count >= eventCheck[0].max_participants) {
            return res.status(400).json({ 
                success: false, 
                message: 'Event is fully booked' 
            });
        }

        // Sanitize inputs
        const sanitizedData = {
            eventId: sanitizeInput(eventId),
            firstName: sanitizeInput(firstName),
            lastName: sanitizeInput(lastName),
            email: sanitizeInput(email),
            phone: sanitizeInput(phone),
            organization: sanitizeInput(organization),
            motivation: sanitizeInput(motivation)
        };

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO risetalk_registrations 
             (event_id, first_name, last_name, email, phone, organization, motivation) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                sanitizedData.eventId,
                sanitizedData.firstName,
                sanitizedData.lastName,
                sanitizedData.email,
                sanitizedData.phone,
                sanitizedData.organization,
                sanitizedData.motivation
            ]
        );

        res.status(201).json({
            success: true,
            message: 'RiseTalk registration successful',
            registrationId: result.insertId
        });

    } catch (error) {
        console.error('Error submitting RiseTalk registration:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Partnership Inquiry
app.post('/api/partnership-inquiry', async (req, res) => {
    try {
        const {
            organizationName,
            industry,
            contactPerson,
            email,
            partnershipType,
            proposal
        } = req.body;

        // Validation
        if (!organizationName || !contactPerson || !email || !partnershipType) {
            return res.status(400).json({ 
                success: false, 
                message: 'All required fields must be filled' 
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        const validTypes = ['corporate', 'university', 'community', 'sponsorship'];
        if (!validTypes.includes(partnershipType)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid partnership type' 
            });
        }

        // Sanitize inputs
        const sanitizedData = {
            organizationName: sanitizeInput(organizationName),
            industry: sanitizeInput(industry || ''),
            contactPerson: sanitizeInput(contactPerson),
            email: sanitizeInput(email),
            partnershipType: sanitizeInput(partnershipType),
            proposal: sanitizeInput(proposal || '')
        };

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO partnership_inquiries 
             (organization_name, industry, contact_person, email, partnership_type, proposal) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                sanitizedData.organizationName,
                sanitizedData.industry,
                sanitizedData.contactPerson,
                sanitizedData.email,
                sanitizedData.partnershipType,
                sanitizedData.proposal
            ]
        );

        res.status(201).json({
            success: true,
            message: 'Partnership inquiry submitted successfully',
            inquiryId: result.insertId
        });

    } catch (error) {
        console.error('Error submitting partnership inquiry:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Contact Message
app.post('/api/contact-message', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            subject,
            message
        } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All required fields must be filled' 
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email format' 
            });
        }

        const validSubjects = ['general', 'partnership', 'mentoring', 'recruitment'];
        if (!validSubjects.includes(subject)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid subject selected' 
            });
        }

        // Sanitize inputs
        const sanitizedData = {
            firstName: sanitizeInput(firstName),
            lastName: sanitizeInput(lastName),
            email: sanitizeInput(email),
            subject: sanitizeInput(subject),
            message: sanitizeInput(message)
        };

        // Insert into database
        const [result] = await pool.execute(
            `INSERT INTO contact_messages 
             (first_name, last_name, email, subject, message) 
             VALUES (?, ?, ?, ?, ?)`,
            [
                sanitizedData.firstName,
                sanitizedData.lastName,
                sanitizedData.email,
                sanitizedData.subject,
                sanitizedData.message
            ]
        );

        res.status(201).json({
            success: true,
            message: 'Contact message sent successfully',
            messageId: result.insertId
        });

    } catch (error) {
        console.error('Error sending contact message:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Get RiseTalk Events
app.get('/api/risetalk-events', async (req, res) => {
    try {
        const [events] = await pool.execute(
            'SELECT * FROM risetalk_events WHERE is_active = TRUE ORDER BY event_date ASC'
        );

        res.status(200).json({
            success: true,
            events: events
        });

    } catch (error) {
        console.error('Error fetching RiseTalk events:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Get Registration Statistics
app.get('/api/statistics', async (req, res) => {
    try {
        const [stats] = await pool.execute('CALL GetRegistrationStats()');

        res.status(200).json({
            success: true,
            statistics: stats
        });

    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'RiseIT API is running',
        timestamp: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`RiseIT API server running on port ${PORT}`);
});

module.exports = app;