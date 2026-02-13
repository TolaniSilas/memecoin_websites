import { motion } from "framer-motion"
import { Heart } from "lucide-react"


export default function FloatingHearts() {
  const hearts = Array.from({ length: 50 })

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((_, i) => {
        const randomLeft = Math.random() * 100
        const randomDelay = Math.random() * 5
        const randomDuration = 6 + Math.random() * 6
        const randomSize = 20 + Math.random() * 20 
        const randomOpacity = 0.5 + Math.random() * 0.5 

        //randomly choose pink or white.
        const color = Math.random() < 0.5 ? "text-pink-500" : "text-white"

        return (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: randomOpacity }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${randomLeft}%`,
              position: "absolute",
              scale: 0.8 + Math.random() * 0.4, 
            }}
          >
            <Heart
              size={randomSize}
              className={color}
              style={{ opacity: randomOpacity }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
