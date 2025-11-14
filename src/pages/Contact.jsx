import Button from '../components/Button';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with RiseIT Consulting. We're here to answer your questions and explore collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">Email</h3>
                <p className="text-gray-300 mb-4">riseit.consulting@gmail.com</p>
                <Button href="mailto:riseit.consulting@gmail.com" variant="secondary" size="small">
                  Send Email
                </Button>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">Location</h3>
                <p className="text-gray-300 mb-4">Jakarta, Indonesia</p>
                <Button variant="secondary" size="small" disabled>
                  View Map
                </Button>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">Social Media</h3>
                <p className="text-gray-300 mb-4">@riseitconsulting</p>
                <Button href="https://instagram.com/riseitconsulting" variant="secondary" size="small">
                  Follow Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have a question, feedback, or want to collaborate? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Subject *</label>
                  <select className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white focus:outline-none focus:border-accent-yellow" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="mentoring">Mentoring Program</option>
                    <option value="risetalk">RiseTalk Event</option>
                    <option value="recruitment">Recruitment</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Organization/University</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                    placeholder="Enter your organization or university"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow h-32"
                    placeholder="Tell us how we can help you"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white focus:outline-none focus:border-accent-yellow">
                    <option value="">Select an option</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend">Friend or Colleague</option>
                    <option value="event">Event or Workshop</option>
                    <option value="university">University</option>
                    <option value="website">Our Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button type="submit" variant="accent" size="large" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-3">
                  How can I join RiseIT Consulting?
                </h3>
                <p className="text-gray-300">
                  You can join RiseIT by applying through our recruitment page. We typically open recruitment twice a year. Follow our social media for updates on upcoming opportunities.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-3">
                  What programs do you offer?
                </h3>
                <p className="text-gray-300">
                  We offer mentoring programs, RiseTalk events, open recruitment, and partnership opportunities. Each program is designed to help IT students develop consulting skills and industry experience.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-3">
                  How can I become a mentor?
                </h3>
                <p className="text-gray-300">
                  If you have 2+ years of industry experience in IT consulting or related fields, you can apply to become a mentor. Contact us through the form above or email us directly.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-3">
                  Do you offer internships?
                </h3>
                <p className="text-gray-300">
                  Yes, we partner with various companies to offer internship opportunities for our members. These are typically announced through our internal channels and social media.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-3">
                  How can I partner with RiseIT?
                </h3>
                <p className="text-gray-300">
                  We welcome partnerships with companies, universities, and organizations. Visit our partnership page or contact us directly to discuss collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow us on social media to stay updated with our latest events and opportunities.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://instagram.com/riseitconsulting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center text-white hover:bg-accent-yellow hover:text-dark-violet transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:riseit.consulting@gmail.com" 
                className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center text-white hover:bg-accent-yellow hover:text-dark-violet transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <Button href="/programs" variant="outline" size="large">
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;