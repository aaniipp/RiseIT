import Button from '../components/Button';

const Partnership = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Collaborate with RiseIT Consulting to create meaningful impact in Indonesia's IT ecosystem and develop the next generation of tech talent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Access to Talent
                </h3>
                <p className="text-gray-300 text-sm">
                  Connect with bright, motivated IT students who are passionate about consulting and technology.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Innovation Hub
                </h3>
                <p className="text-gray-300 text-sm">
                  Tap into fresh perspectives and innovative solutions from the next generation of IT professionals.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Social Impact
                </h3>
                <p className="text-gray-300 text-sm">
                  Contribute to developing Indonesia's digital talent pool and make a meaningful social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent-yellow">Corporate Partnerships</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Collaborate with us on projects, mentorship programs, and talent development initiatives.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Project-based collaborations</li>
                  <li>• Internship opportunities</li>
                  <li>• Guest speaking sessions</li>
                  <li>• Skill development workshops</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent-yellow">University Collaborations</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Partner with educational institutions to bridge academia and industry gap.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Curriculum development</li>
                  <li>• Joint research projects</li>
                  <li>• Student exchange programs</li>
                  <li>• Career development workshops</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent-yellow">Community Projects</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Work together on social impact projects that benefit the community.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Digital literacy programs</li>
                  <li>• Non-profit tech solutions</li>
                  <li>• Community training sessions</li>
                  <li>• Social innovation challenges</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-accent-yellow">Sponsorship Opportunities</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Support our programs and events through strategic sponsorships.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Event sponsorships</li>
                  <li>• Program funding</li>
                  <li>• Scholarship programs</li>
                  <li>• Infrastructure support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Current Partners
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're proud to collaborate with leading organizations who share our vision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="card flex items-center justify-center h-24">
                <span className="text-gray-400 font-semibold">Partner 1</span>
              </div>
              <div className="card flex items-center justify-center h-24">
                <span className="text-gray-400 font-semibold">Partner 2</span>
              </div>
              <div className="card flex items-center justify-center h-24">
                <span className="text-gray-400 font-semibold">Partner 3</span>
              </div>
              <div className="card flex items-center justify-center h-24">
                <span className="text-gray-400 font-semibold">Partner 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start a Partnership
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Interested in partnering with us? Fill out the form below and we'll get in touch with you soon.
              </p>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Organization Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your organization name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Industry *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your industry"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Contact Person *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Partnership Type *</label>
                  <select className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white focus:outline-none focus:border-accent-yellow">
                    <option value="">Select partnership type</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="university">University Collaboration</option>
                    <option value="community">Community Project</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Partnership Proposal</label>
                  <textarea
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow h-32"
                    placeholder="Tell us about your partnership proposal"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Expected Timeline</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                    placeholder="e.g., Q2 2024, Immediate, etc."
                  />
                </div>
                
                <Button type="submit" variant="accent" size="large" className="w-full">
                  Submit Partnership Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in shaping the future of IT consulting in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" size="large">
                Contact Us Directly
              </Button>
              <Button href="mailto:riseit.consulting@gmail.com" variant="outline" size="large">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;