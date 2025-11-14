import { useState } from 'react';
import Button from '../components/Button';
import { risetalkData } from '../data/risetalkData';

const RiseTalk = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTalks = risetalkData.filter(talk => talk.type === 'upcoming');
  const pastTalks = risetalkData.filter(talk => talk.type === 'past');

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              RiseTalk
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Engaging discussions and insights from industry experts, thought leaders, and innovators in the IT consulting world.
            </p>
          </div>
        </div>
      </section>

      {/* About RiseTalk */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-accent-yellow mb-6">
                  What is RiseTalk?
                </h2>
                <p className="text-gray-300 mb-6">
                  RiseTalk is our flagship event series featuring weekly sessions with industry professionals, tech leaders, and consulting experts. These sessions provide valuable insights into the latest trends, challenges, and opportunities in the IT industry.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-yellow mb-2">Weekly</div>
                    <div className="text-gray-300">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-yellow mb-2">90min</div>
                    <div className="text-gray-300">Duration</div>
                  </div>
                </div>
                <Button href="/contact" variant="accent">
                  Become a Speaker
                </Button>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-bold text-accent-yellow mb-6">
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Career development tips</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Technology trends</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Networking opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Events
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-purple/20 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-accent-yellow text-dark-violet'
                      : 'text-white hover:text-accent-yellow'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-accent-yellow text-dark-violet'
                      : 'text-white hover:text-accent-yellow'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>

            {/* Events List */}
            <div className="grid md:grid-cols-2 gap-8">
              {(activeTab === 'upcoming' ? upcomingTalks : pastTalks).map((talk) => (
                <div key={talk.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{talk.title}</h3>
                      <p className="text-accent-yellow font-semibold">{talk.speaker}</p>
                    </div>
                    {talk.type === 'upcoming' && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Upcoming
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{talk.date}</span>
                    <svg className="w-5 h-5 ml-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{talk.time}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{talk.description}</p>
                  
                  {talk.registrationLink && (
                    <Button href={talk.registrationLink} variant="primary" className="w-full">
                      Register Now
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {activeTab === 'past' && pastTalks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No past events available yet.</p>
              </div>
            )}

            {activeTab === 'upcoming' && upcomingTalks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No upcoming events scheduled yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss an upcoming RiseTalk session.
              </p>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">University/Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow"
                    placeholder="Enter your university or company"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Topics of Interest</label>
                  <textarea
                    className="w-full px-4 py-3 bg-purple/20 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-yellow h-32"
                    placeholder="Tell us what topics you'd like to hear about"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="accent" size="large" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Speak at RiseTalk?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Share your expertise and inspire the next generation of IT consultants.
            </p>
            <Button href="/contact" variant="outline" size="large">
              Apply as Speaker
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiseTalk;