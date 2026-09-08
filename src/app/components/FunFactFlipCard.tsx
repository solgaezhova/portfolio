import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";

export function FunFactFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isTouchRef = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchRef.current = true;
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
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  const handleClick = () => {
    // Skip click handling if it was already handled by touch (avoids double-toggle on mobile)
    if (isTouchRef.current) {
      isTouchRef.current = false;
      return;
    }
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="bg-card border border-border rounded-2xl cursor-pointer h-full relative overflow-hidden min-h-[160px] md:min-h-[180px]"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center center",
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Front of card */}
        <motion.div
          className="p-6 flex items-start gap-4"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
          } as any}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50 flex items-center justify-center shrink-0 text-amber-500 dark:text-amber-400">
            <Lightbulb size={18} />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1">
              Fun Fact
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              click/tap to reveal
            </p>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="p-6 flex items-start gap-4"
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180,
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          } as any}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50 flex items-center justify-center shrink-0 text-amber-500 dark:text-amber-400">
            <Lightbulb size={18} />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1">
              Fun Fact
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isFlipped ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-sm text-foreground leading-relaxed break-words"
            >
              Before software, I worked in law. I've also lived and worked across multiple countries and cultures. This experience helps me bring adaptability, curiosity, and diverse perspectives to teams.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
