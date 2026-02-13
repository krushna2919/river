import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-white mb-8 max-w-4xl mx-auto leading-[1.1]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Empowering Rural Communities Through Quality Education
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/donate"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-terracotta inline-block"
          >
            Donate Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="scroll-indicator block mb-3">Scroll to View</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-text-gray mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
