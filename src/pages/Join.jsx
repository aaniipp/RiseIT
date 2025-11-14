import { useState } from 'react';
import Button from '../components/Button';

const Join = () => {
  const [selectedPosition, setSelectedPosition] = useState('');

  const positions = [
    {
      id: 'president',
      title: 'President',
      description: 'Leads RiseIT strategy and operations.',
      requirements: ['Leadership experience', 'Strategic thinking', 'Strong communication skills']
    },
    {
      id: 'co-president',
      title: 'Co-President',
      description: 'Supports president in coordination and decision-making.',
      requirements: ['Leadership experience', 'Coordination skills', 'Decision-making ability']
    },
    {
      id: 'head-medcom',
      title: 'Head of MedCom',
      description: 'Manages branding, marketing, and communications.',
      requirements: ['Marketing knowledge', 'Content creation skills', 'Design basics']
    },
    {
      id: 'co-head-medcom',
      title: 'Co-Head of MedCom',
      description: 'Assists MedCom in content & design.',
      requirements: ['Creative skills', 'Content creation', 'Design knowledge']
    },
    {
      id: 'head-people',
      title: 'Head of People',
      description: 'Oversees recruitment and internal management.',
      requirements: ['HR knowledge', 'People management', 'Communication skills']
    },
    {
      id: 'head-product',
      title: 'Head of Product',
      description: 'Ensures delivery of projects and program execution.',
      requirements: ['Project management', 'Technical skills', 'Leadership']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Be part of the next generation of IT leaders and consultants. Shape the future of Indonesia's digital landscape with us.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make a difference in the IT consulting space.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {positions.map((position) => (
                <div 
                  key={position.id}
                  className={`card cursor-pointer transition-all duration-300 ${
                    selectedPosition === position.id ? 'border-accent-yellow bg-purple/20' : ''
                  }`}
                  onClick={() => setSelectedPosition(position.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-accent-yellow">{position.title}</h3>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedPosition === position.id 
                        ? 'bg-accent-yellow border-accent-yellow' 
                        : 'border-purple/40'
                    }`}>
                      {selectedPosition === position.id && (
                        <svg className="w-full h-full text-dark-violet" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-accent-yellow mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={selectedPosition === position.id ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPosition(position.id);
                    }}
                  >
                    {selectedPosition === position.id ? 'Selected' : 'Select Position'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Apply Now
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ready to join our team? Fill out the application form below and take the first step towards an exciting journey with RiseIT.
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
                    <label className="block text-white font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">University *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your university"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Major *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your major"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Current Semester *</label>
                    <select className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white focus:outline-none focus:border-accent-yellow" required>
                      <option value="">Select semester</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                      <option value="5">Semester 5</option>
                      <option value="6">Semester 6</option>
                      <option value="7">Semester 7</option>
                      <option value="8">Semester 8</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">GPA *</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="4"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your GPA"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Position Applied For *</label>
                  <select 
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white focus:outline-none focus:border-accent-yellow"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position.id} value={position.id}>
                        {position.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Why do you want to join RiseIT? *</label>
                  <textarea
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow h-32"
                    placeholder="Tell us why you're interested in joining RiseIT"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Relevant Experience</label>
                  <textarea
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow h-32"
                    placeholder="Share any relevant experience, projects, or skills"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Resume/CV *</label>
                  <div className="border-2 border-dashed border-purple/30 rounded-lg p-6 text-center">
                    <svg className="w-12 h-12 text-purple mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-300 mb-2">Upload your resume/CV</p>
                    <p className="text-gray-400 text-sm">PDF, DOC, DOCX (max 5MB)</p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <Button type="button" variant="secondary" size="small">
                      Choose File
                    </Button>
                  </div>
                </div>
                
                <Button type="submit" variant="accent" size="large" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Recruitment Timeline
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Application Period</h3>
                  <p className="text-gray-300 mb-2">January 1-20, 2024</p>
                  <p className="text-gray-400">Submit your application through our online form.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Screening Process</h3>
                  <p className="text-gray-300 mb-2">January 21-25, 2024</p>
                  <p className="text-gray-400">Review of applications and initial screening.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Interviews</h3>
                  <p className="text-gray-300 mb-2">January 26 - February 5, 2024</p>
                  <p className="text-gray-400">Interview rounds with shortlisted candidates.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Final Selection</h3>
                  <p className="text-gray-300 mb-2">February 6-10, 2024</p>
                  <p className="text-gray-400">Final selection and offer letters.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Onboarding</h3>
                  <p className="text-gray-300 mb-2">February 15, 2024</p>
                  <p className="text-gray-400">Welcome and orientation for new team members.</p>
                </div>
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
              Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Feel free to reach out if you have any questions about the recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" size="large">
                Contact Us
              </Button>
              <Button href="mailto:riseit.consulting@gmail.com" variant="outline" size="large">
                Email HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;