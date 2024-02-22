import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function Confetti({ children }: { children: React.ReactNode }) {
  const [isExploding, setIsExploding] = useState(false);
  useEffect(() => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3000);
    return () => {
      setIsExploding(false);
    };
  }, []);
  return (
    <div className="relative">
      <div className="fixed right-0 pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            duration={3000}
            force={0.01}
            colors={["#F86B49", " #DC4405", "#000000", "#FFFFFF"]}
            particleCount={20}
            particleSize={10}
            onComplete={() => {
              setIsExploding(false);
            }}
          />
        )}
      </div>
      <span onMouseEnter={() => setIsExploding(true)}>{children}</span>
      <div className="fixed left-0 pointer-events-none">
        {isExploding && (
          <ConfettiExplosion
            duration={3000}
            force={0.01}
            colors={["#F86B49", " #DC4405", "#000000", "#FFFFFF"]}
            particleSize={10}
            particleCount={20}
            onComplete={() => {
              setIsExploding(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Confetti;
