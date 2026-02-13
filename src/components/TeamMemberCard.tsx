import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMemberCard = ({ image, name, role, bio }: TeamMemberCardProps) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group cursor-pointer"
        onClick={() => setShowBio(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 right-4 bg-terracotta text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
            <ArrowRight size={16} />
            <span>View Bio</span>
          </div>
        </div>
        <h3 className="text-base font-semibold uppercase tracking-wide text-foreground mt-4">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{role}</p>
      </motion.div>

      <AnimatePresence>
        {showBio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowBio(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-background max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-lg p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowBio(false)}
                className="absolute top-4 right-4 bg-terracotta hover:bg-terracotta/90 text-white p-2 rounded-md transition-all"
                aria-label="Close bio"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-40 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h2 className="text-2xl font-serif text-foreground">{name}</h2>
                  <p className="text-terracotta font-medium mt-1">{role}</p>
                </div>
              </div>
              <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                {bio}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamMemberCard;
