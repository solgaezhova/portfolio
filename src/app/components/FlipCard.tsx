import { useState, useRef } from "react";
import { motion } from "motion/react";

interface FlipCardProps {
  frontMetric: string;
  frontLabel: string;
  backTitle: string;
  backItems?: (string | { text: string; bold?: boolean })[];
  backDescription?: string;
  icon?: React.ReactNode;
  gradientIndex?: number;
  isLastCard?: boolean;
}

export function FlipCard({
  frontMetric,
  frontLabel,
  backTitle,
  backItems,
  backDescription,
  icon,
  gradientIndex = 0,
  isLastCard = false,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
    const diffX = Math.abs(touchEnd.x - touchStartRef.current.x);
    const diffY = Math.abs(touchEnd.y - touchStartRef.current.y);
    // If movement is minimal in both directions, treat as a tap
    if (diffX < 25 && diffY < 25) {
      setIsFlipped((prev) => !prev);
    }
  };

  const gradients = [
    "from-cyan-400/22 via-cyan-200/8 to-transparent",
    "from-teal-400/22 via-teal-200/8 to-transparent",
    "from-sky-400/22 via-sky-200/8 to-transparent",
    "from-emerald-400/22 via-emerald-200/8 to-transparent",
  ];

  const accentBars = [
    "bg-cyan-500/65",
    "bg-teal-500/65",
    "bg-sky-500/65",
    "bg-emerald-500/65",
  ];

  const iconColors = [
    "text-cyan-600",
    "text-teal-600",
    "text-sky-600",
    "text-emerald-600",
  ];

  const glow = gradients[gradientIndex % 4];
  const accentBar = accentBars[gradientIndex % 4];
  const iconColor = iconColors[gradientIndex % 4];

  return (
    <div
      className="h-full w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        perspective: "2000px",
        perspectiveOrigin: "center center",
        position: "relative",
      }}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front of card - Core Strengths style */}
        <motion.div
          className={`absolute inset-0 w-full h-full p-5 bg-card/75 backdrop-blur-sm border border-border rounded-xl transition-all duration-200 flex flex-col items-start justify-start group overflow-hidden`}
          style={{
            backfaceVisibility: "hidden",
          } as any}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-70 rounded-xl`}
          />
          <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white/35 blur-2xl" />
          
          <div className="relative z-10 w-full flex flex-col h-full">
            <div className="flex items-start justify-between flex-1">
              <div className="flex-1">
                <div className={`h-1.5 w-11 rounded-full mb-3 ${accentBar}`} />
                <div className={`text-4xl md:text-5xl font-normal text-black mb-1`} style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
                  {frontMetric}
                </div>
                <div className="text-sm font-normal text-black leading-tight mb-2" style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>{frontLabel}</div>
              </div>
              {icon && (
                <div className={`flex-shrink-0 ml-2 ${iconColor}`}>
                  {icon}
                </div>
              )}
            </div>
            
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 whitespace-nowrap" style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
              Hover/tap to reveal
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`absolute inset-0 w-full h-full p-5 bg-card/75 backdrop-blur-sm border border-border rounded-xl flex flex-col justify-start group overflow-hidden`}
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180,
          } as any}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-70 rounded-xl`}
          />
          <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white/35 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm md:text-base font-semibold text-black flex-1" style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
                {backTitle}
              </h3>
              {icon && (
                <div className={`flex-shrink-0 ml-2 ${iconColor}`}>
                  {icon}
                </div>
              )}
            </div>
            <div className="space-y-1.5">
              {backDescription ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isFlipped ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-black leading-relaxed"
                  style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}
                >
                  {backDescription}
                </motion.div>
              ) : (
                backItems?.map((item, index) => {
                const itemText = typeof item === "string" ? item : item.text;
                const isBold = typeof item === "object" && item.bold;
                
                // Render centered arrow for empty items
                if (itemText === "") {
                  return (
                    <motion.div
                      key={`arrow-${index}`}
                      initial={{ opacity: 0 }}
                      animate={isFlipped ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex justify-center py-2 ${isLastCard ? "hidden sm:flex" : ""}`}
                    >
                      <span className="text-base text-black font-light" style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", letterSpacing: "-0.5px"}}>↓</span>
                    </motion.div>
                  );
                }
                
                // Render without bullet point for special items or continuation items
                if (itemText.startsWith("Happier") || itemText.startsWith("Better") || itemText.startsWith("and ")) {
                  // Hide "Better..." items on mobile, show only on sm and up
                  if (itemText.startsWith("Better") && isLastCard) {
                    return (
                      <motion.div
                        key={itemText}
                        initial={{ opacity: 0, x: -8 }}
                        animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ delay: index * 0.05 }}
                        className="hidden sm:flex items-start"
                      >
                        <span className="text-sm italic text-black leading-tight" style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
                          {itemText}
                        </span>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div
                      key={itemText}
                      initial={{ opacity: 0, x: -8 }}
                      animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <span className={`${itemText.startsWith("Better") ? "text-sm italic" : `text-xs ${isBold ? "font-semibold" : "font-normal"}`} text-black leading-tight`} style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
                        {itemText}
                      </span>
                    </motion.div>
                  );
                }
                
                // Regular items with bullet points
                return (
                  <motion.div
                    key={itemText}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-1 bg-primary opacity-60`} />
                    <span className={`text-xs text-black leading-tight ${isBold ? "font-semibold" : "font-normal"}`} style={{WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale"}}>
                      {itemText}
                    </span>
                  </motion.div>
                );
              })
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
