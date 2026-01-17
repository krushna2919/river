import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Get Involved
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-section text-foreground mb-6"
            >
              Join Us in Transforming Lives
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-muted-foreground mb-8"
            >
              Whether you're an educator, researcher, organization, or supporter, 
              there are many ways to contribute to our mission of revolutionizing 
              rural education.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Rishi Valley - 517 352, Chittoor District,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a 
                    href="mailto:office@rishivalley.org"
                    className="text-primary hover:underline text-sm"
                  >
                    office@rishivalley.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    (08571) 280622 / 280582
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://www.rishivalley.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Visit Rishi Valley Education Centre
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Ways to Help */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                title: "Partner With Us",
                description: "Collaborate with RIVER to implement MGML methodology in your state or country. We provide training, materials, and ongoing support.",
              },
              {
                title: "Support Our Schools",
                description: "Help us maintain and expand our satellite schools network, providing quality education to underserved rural communities.",
              },
              {
                title: "Teacher Training",
                description: "Send educators to our training programs or invite our team to conduct workshops in your region.",
              },
              {
                title: "Volunteer & Research",
                description: "Join as a volunteer or collaborate on educational research. We welcome students and faculty from universities worldwide.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
