const TeamCard = ({ member }) => {
  return (
    <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
      <div className="mb-4">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple to-bright-violet rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full hidden items-center justify-center text-white text-2xl font-bold">
            {member.name.charAt(0)}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-yellow transition-colors duration-300">
        {member.name}
      </h3>
      
      <p className="text-accent-yellow font-semibold mb-3">
        {member.role}
      </p>
      
      <p className="text-gray-300 text-sm">
        {member.description}
      </p>
    </div>
  );
};

export default TeamCard;