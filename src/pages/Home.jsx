import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProgramCard from '../components/ProgramCard';
import { programData } from '../data/programData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-1 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
              Learn. Fail. Rise.
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-accent-yellow mb-8 text-shadow">
              Shaping Tomorrow's IT Leaders
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              RiseIT Consulting is the first student-led IT consulting sandbox that bridges the gap between classroom learning and real industry practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/join" variant="accent" size="large">
                Join RiseIT
              </Button>
              <Button href="/programs" variant="outline" size="large">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-bright-violet/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-yellow/10 rounded-full blur-lg"></div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About RiseIT Consulting
              </h2>
              <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-accent-yellow mb-6">
                  Why We Exist
                </h3>
                <p className="text-gray-300 mb-6">
                  We believe every IT student deserves a space to discover their potential — to learn, fail, and rise into the next generation of digital leaders who can shape Indonesia's future.
                </p>
                
                <h3 className="text-2xl font-bold text-accent-yellow mb-6">
                  How We Do It
                </h3>
                <p className="text-gray-300 mb-8">
                  By creating a sandbox environment that blends consulting training, mentorship, and hands-on project experience, helping students apply their technical knowledge to solve real business and technology problems.
                </p>
                
                <Button href="/about" variant="secondary">
                  Learn More About Us
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">100+</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">20+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">15+</div>
                  <div className="text-gray-300">Industry Partners</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">50+</div>
                  <div className="text-gray-300">Events Hosted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section-padding bg-dark-violet">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our range of programs designed to help you grow as an IT consultant and leader.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programData.slice(0, 4).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/programs" variant="primary" size="large">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-2">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in shaping the future of IT consulting in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/join" variant="accent" size="large">
                Apply Now
              </Button>
              <Button href="/contact" variant="outline" size="large">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;