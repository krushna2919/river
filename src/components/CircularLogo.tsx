import hoopoe from "@/assets/hoopoe-logo.png";

const CircularLogo = ({ size = 200 }: { size?: number }) => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img 
        src={hoopoe} 
        alt="Hoopoe Bird - Rishi Valley Logo" 
        className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ 
          width: size, 
          height: size,
        }}
      />
    </div>
  );
};

export default CircularLogo;
