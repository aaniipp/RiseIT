import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  return (
    <div className="card group hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple to-bright-violet rounded-lg flex items-center justify-center mr-4">
          <img 
            src={program.icon} 
            alt={program.title}
            className="w-6 h-6 text-white"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-6 h-6 text-white hidden items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-accent-yellow transition-colors duration-300">
          {program.title}
        </h3>
      </div>
      
      <p className="text-gray-300 mb-4">
        {program.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {program.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-accent-yellow mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to={program.link}
        className="inline-flex items-center text-accent-yellow hover:text-yellow-300 font-semibold transition-colors duration-300"
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ProgramCard;