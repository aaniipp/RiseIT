import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  onClick, 
  type = 'button',
  className = '',
  disabled = false 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple/50';
  
  const variantClasses = {
    primary: 'bg-purple hover:bg-bright-violet text-white hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-purple hover:bg-purple text-purple hover:text-white',
    accent: 'bg-accent-yellow hover:bg-yellow-300 text-dark-violet hover:shadow-lg',
    outline: 'bg-transparent border-2 border-white hover:bg-white hover:text-dark-violet text-white'
  };

  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href && !disabled) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;