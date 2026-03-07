// src/components/ui/Card.jsx
const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;