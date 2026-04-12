import { Shield } from "lucide-react";

const GovernmentSeal = () => {
  return (
    <div className="relative">
      {/* Outer ring */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-seal-gold to-seal-gold-dark p-0.5 shadow-lg">
        {/* Inner circle */}
        <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
          <Shield className="w-7 h-7 text-seal-gold" strokeWidth={2.5} />
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-seal-gold/20 blur-md -z-10" />
    </div>
  );
};

export default GovernmentSeal;
