import TeamCard from '../components/TeamCard';
import { teamData } from '../data/teamData';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-1">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About RiseIT Consulting
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Empowering the next generation of IT leaders and consultants through hands-on experience and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Circle Section */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Golden Circle
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our approach is built on a simple but powerful framework that guides everything we do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* WHY */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">WHY</span>
                </div>
                <h3 className="text-2xl font-bold text-accent-yellow mb-4">
                  Our Purpose
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe every IT student deserves a space to discover their potential — to learn, fail, and rise into the next generation of digital leaders who can shape Indonesia's future.
                </p>
              </div>
              
              {/* HOW */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">HOW</span>
                </div>
                <h3 className="text-2xl font-bold text-accent-yellow mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  By creating a sandbox environment that blends consulting training, mentorship, and hands-on project experience, helping students apply their technical knowledge to solve real business and technology problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card">
                <h3 className="text-2xl font-bold text-accent-yellow mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To bridge the gap between classroom learning and real industry practice by providing a comprehensive consulting sandbox environment where IT students can develop professional skills, gain practical experience, and build meaningful connections.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-2xl font-bold text-accent-yellow mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the leading student-led IT consulting organization in Indonesia, producing exceptional IT consultants who drive digital innovation and contribute to the nation's technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our dedicated team of student leaders working together to make RiseIT Consulting a platform for growth and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Learning
                </h3>
                <p className="text-gray-300 text-sm">
                  Continuous growth and knowledge sharing
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Innovation
                </h3>
                <p className="text-gray-300 text-sm">
                  Creative solutions and forward thinking
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Collaboration
                </h3>
                <p className="text-gray-300 text-sm">
                  Working together for greater impact
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent-yellow mb-2">
                  Excellence
                </h3>
                <p className="text-gray-300 text-sm">
                  Commitment to quality and integrity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;