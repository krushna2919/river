import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanityClient } from "@/lib/sanity";

type ContactDoc = {
  title: string;
  formHeading: string;
  phones: string[];
  email: string;
  address: string;
  mapUrl: string;
};

const QUERY = `*[_id == "page-contact"][0]{title, formHeading, phones, email, address, mapUrl}`;

const ContactUsPage = () => {
  const { data } = useQuery<ContactDoc | null>({
    queryKey: ["page-contact"],
    queryFn: () => sanityClient.fetch(QUERY),
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    place: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.fullName.trim() || !formData.email.trim()) return;
    if (!emailRegex.test(formData.email)) return;
  };

  const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header isInnerPage />
        <main className="pt-28 pb-20" />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header isInnerPage />
      <main className="pt-28 md:pt-32 pb-20 md:pb-32">
        <div className="container-wide">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 italic"
          >
            {data.title}
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-muted/40 rounded-2xl p-8 md:p-10 space-y-0 self-start"
            >
              <div className="flex items-start gap-5 py-8 first:pt-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Call us</h3>
                  <div className="space-y-1">
                    {data.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="block text-muted-foreground hover:text-primary transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-5 py-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Email us</h3>
                  <a href={`mailto:${data.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-5 py-8 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Location</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {data.address}
                  </p>
                  <a
                    href={data.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary font-semibold uppercase tracking-wider text-sm border-b-2 border-primary pb-0.5 hover:opacity-80 transition-opacity"
                  >
                    View on map
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-10">
                {data.formHeading}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="text" name="place" placeholder="Place" value={formData.place} onChange={handleChange} className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="px-8 py-3 border border-primary text-primary uppercase tracking-wider text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
