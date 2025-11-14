-- RiseIT Consulting Database Schema
-- Designed to store all form submissions and user interactions

-- Create database
CREATE DATABASE riseit_consulting;
USE riseit_consulting;

-- Users table for storing user information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    university VARCHAR(255),
    major VARCHAR(255),
    organization VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Mentee Applications table
CREATE TABLE mentee_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    university VARCHAR(255) NOT NULL,
    major VARCHAR(255) NOT NULL,
    motivation TEXT NOT NULL,
    status ENUM('pending', 'reviewing', 'accepted', 'rejected') DEFAULT 'pending',
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Associate Applications table
CREATE TABLE associate_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    position_applied_for ENUM('president', 'co-president', 'head-medcom', 'co-head-medcom', 'head-people', 'head-product') NOT NULL,
    motivation TEXT NOT NULL,
    relevant_experience TEXT,
    status ENUM('pending', 'reviewing', 'accepted', 'rejected') DEFAULT 'pending',
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- RiseTalk Events table
CREATE TABLE risetalk_events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    speaker VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    description TEXT,
    max_participants INT DEFAULT 100,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- RiseTalk Registrations table
CREATE TABLE risetalk_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    motivation TEXT NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('registered', 'confirmed', 'cancelled', 'attended') DEFAULT 'registered',
    FOREIGN KEY (event_id) REFERENCES risetalk_events(event_id) ON DELETE CASCADE
);

-- Partnership Inquiries table
CREATE TABLE partnership_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    organization_name VARCHAR(255) NOT NULL,
    industry VARCHAR(255),
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    partnership_type ENUM('corporate', 'university', 'community', 'sponsorship') NOT NULL,
    proposal TEXT,
    status ENUM('pending', 'contacted', 'in_progress', 'completed', 'rejected') DEFAULT 'pending',
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject ENUM('general', 'partnership', 'mentoring', 'recruitment') NOT NULL,
    message TEXT NOT NULL,
    status ENUM('unread', 'read', 'responded') DEFAULT 'unread',
    message_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscriptions table
CREATE TABLE newsletter_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Analytics table for tracking form submissions
CREATE TABLE form_analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    form_type ENUM('mentee', 'associate', 'risetalk', 'partnership', 'contact', 'newsletter') NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    referrer VARCHAR(255),
    user_agent TEXT,
    ip_address VARCHAR(45)
);

-- Insert sample RiseTalk events
INSERT INTO risetalk_events (event_id, title, speaker, event_date, event_time, description, max_participants) VALUES
('intro-it-consulting', 'Introduction to IT Consulting', 'John Doe - Senior Consultant at Tech Company', '2024-01-15', '19:00:00', 'Learn the fundamentals of IT consulting and career pathways in the industry.', 100),
('digital-transformation', 'Digital Transformation Strategies', 'Jane Smith - CTO at StartupXYZ', '2024-01-22', '19:00:00', 'Explore how companies are navigating digital transformation and the role of consultants.', 100);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_mentee_applications_email ON mentee_applications(email);
CREATE INDEX idx_associate_applications_email ON associate_applications(email);
CREATE INDEX idx_risetalk_registrations_email ON risetalk_registrations(email);
CREATE INDEX idx_partnership_inquiries_email ON partnership_inquiries(email);
CREATE INDEX idx_contact_messages_email ON contact_messages(email);
CREATE INDEX idx_form_analytics_date ON form_analytics(submission_date);

-- Create views for reporting
CREATE VIEW mentee_applications_view AS
SELECT 
    ma.id,
    CONCAT(ma.first_name, ' ', ma.last_name) AS full_name,
    ma.email,
    ma.phone,
    ma.university,
    ma.major,
    ma.status,
    ma.application_date
FROM mentee_applications ma;

CREATE VIEW associate_applications_view AS
SELECT 
    aa.id,
    CONCAT(aa.first_name, ' ', aa.last_name) AS full_name,
    aa.email,
    aa.position_applied_for,
    aa.status,
    aa.application_date
FROM associate_applications aa;

CREATE VIEW risetalk_registrations_view AS
SELECT 
    rr.id,
    CONCAT(rr.first_name, ' ', rr.last_name) AS full_name,
    rr.email,
    rr.organization,
    re.title AS event_title,
    re.event_date,
    re.event_time,
    rr.status,
    rr.registration_date
FROM risetalk_registrations rr
JOIN risetalk_events re ON rr.event_id = re.event_id;

-- Stored procedure for getting registration statistics
DELIMITER //
CREATE PROCEDURE GetRegistrationStats()
BEGIN
    SELECT 
        'Mentee Applications' as form_type,
        COUNT(*) as total_count,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COUNT(CASE WHEN status = 'accepted' THEN 1 END) as accepted,
        COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected
    FROM mentee_applications
    
    UNION ALL
    
    SELECT 
        'Associate Applications' as form_type,
        COUNT(*) as total_count,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COUNT(CASE WHEN status = 'accepted' THEN 1 END) as accepted,
        COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected
    FROM associate_applications
    
    UNION ALL
    
    SELECT 
        'RiseTalk Registrations' as form_type,
        COUNT(*) as total_count,
        COUNT(CASE WHEN status = 'registered' THEN 1 END) as pending,
        COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as accepted,
        COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as rejected
    FROM risetalk_registrations;
END //
DELIMITER ;

-- Trigger for logging form submissions
DELIMITER //
CREATE TRIGGER log_mentee_application
AFTER INSERT ON mentee_applications
FOR EACH ROW
BEGIN
    INSERT INTO form_analytics (form_type, referrer, user_agent, ip_address)
    VALUES ('mentee', NULL, NULL, NULL);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER log_associate_application
AFTER INSERT ON associate_applications
FOR EACH ROW
BEGIN
    INSERT INTO form_analytics (form_type, referrer, user_agent, ip_address)
    VALUES ('associate', NULL, NULL, NULL);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER log_risetalk_registration
AFTER INSERT ON risetalk_registrations
FOR EACH ROW
BEGIN
    INSERT INTO form_analytics (form_type, referrer, user_agent, ip_address)
    VALUES ('risetalk', NULL, NULL, NULL);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER log_partnership_inquiry
AFTER INSERT ON partnership_inquiries
FOR EACH ROW
BEGIN
    INSERT INTO form_analytics (form_type, referrer, user_agent, ip_address)
    VALUES ('partnership', NULL, NULL, NULL);
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER log_contact_message
AFTER INSERT ON contact_messages
FOR EACH ROW
BEGIN
    INSERT INTO form_analytics (form_type, referrer, user_agent, ip_address)
    VALUES ('contact', NULL, NULL, NULL);
END //
DELIMITER ;