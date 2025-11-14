import Button from '../components/Button';

const Mentoring = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mentoring Program
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your IT career with personalized mentorship from industry experts and experienced consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-accent-yellow mb-6">
                  Why Join Our Mentoring Program?
                </h2>
                <p className="text-gray-300 mb-6">
                  Our mentoring program is designed to bridge the gap between academic knowledge and real-world industry requirements. You'll work closely with experienced mentors who will guide you through your professional development journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">One-on-one personalized guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Real project experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Career development planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Networking opportunities</span>
                  </li>
                </ul>
                <Button href="/join" variant="accent">
                  Apply for Mentoring
                </Button>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-bold text-accent-yellow mb-6">
                  Program Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-accent-yellow font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Months Duration</h4>
                      <p className="text-gray-400 text-sm">Intensive mentoring program</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-accent-yellow font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sessions per Month</h4>
                      <p className="text-gray-400 text-sm">Regular mentor meetings</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-accent-yellow font-bold">1:1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Personal Attention</h4>
                      <p className="text-gray-400 text-sm">Focused mentorship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Eligibility Criteria
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-4">
                  For Mentees
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Currently enrolled IT student (semester 3+)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Strong academic performance (GPA ≥ 3.0)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Passionate about IT consulting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Available for 3-month commitment</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-accent-yellow mb-4">
                  For Mentors
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">2+ years industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">IT consulting or related field</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Passion for teaching and mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Strong communication skills</span>
                  </li>
                </ul>
              </div>
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
                Program Timeline
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
                  <p className="text-gray-300 mb-2">January 1-15, 2024</p>
                  <p className="text-gray-400">Submit your application with resume and statement of purpose.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Selection Process</h3>
                  <p className="text-gray-300 mb-2">January 16-25, 2024</p>
                  <p className="text-gray-400">Review applications and conduct interviews.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Matching & Orientation</h3>
                  <p className="text-gray-300 mb-2">January 26-31, 2024</p>
                  <p className="text-gray-400">Match mentors with mentees and conduct orientation session.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Mentoring Period</h3>
                  <p className="text-gray-300 mb-2">February - April 2024</p>
                  <p className="text-gray-400">Regular mentoring sessions and project work.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-yellow mb-2">Graduation & Showcase</h3>
                  <p className="text-gray-300 mb-2">May 2024</p>
                  <p className="text-gray-400">Program completion and project showcase event.</p>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our mentoring program and take the first step towards becoming an IT consultant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/join" variant="accent" size="large">
                Apply as Mentee
              </Button>
              <Button href="/contact" variant="outline" size="large">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentoring;