import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import paymentQrCode from "@/assets/payment-qr-code.png";

const DonatePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    amount: "",
    email: "",
    phone: "",
    panNumber: "",
    name: "",
    postalAddress: "",
    donationFor: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.email || !formData.name) {
      toast({
        title: "Missing fields",
        description: "Please fill in at least Amount, Email, and Name.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you!",
      description: "Your donation details have been submitted. Please scan the QR code to complete the payment.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* QR Code */}
            <div className="flex flex-col items-center gap-6 p-8 mb-12 border border-border rounded-lg bg-card">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Scan to Pay
              </h3>
              <img
                src={paymentQrCode}
                alt="UPI Payment QR Code"
                className="w-80 h-80 md:w-96 md:h-96 object-contain"
              />
              <p className="text-sm text-muted-foreground text-center">
                Scan this QR code using any UPI app to complete your donation.
              </p>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
              Payment Details
            </h1>
            <div className="w-16 h-1 bg-primary mb-10" />

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                  <Input
                    type="number"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={(e) => handleChange("amount", e.target.value)}
                    className="pl-7"
                    min="1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">Phone</Label>
                <Input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">PAN Number</Label>
                <Input
                  type="text"
                  placeholder="Enter PAN Number"
                  value={formData.panNumber}
                  onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
                  maxLength={10}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">Name</Label>
                <Input
                  type="text"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-start gap-4">
                <Label className="font-semibold text-foreground mt-2">Postal Address</Label>
                <Textarea
                  placeholder="Enter Postal Address"
                  value={formData.postalAddress}
                  onChange={(e) => handleChange("postalAddress", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                <Label className="font-semibold text-foreground">Donation For</Label>
                <Select
                  value={formData.donationFor}
                  onValueChange={(value) => handleChange("donationFor", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="--Select--" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corpus">Corpus</SelectItem>
                    <SelectItem value="specific">Specific</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-[140px_1fr] gap-4">
                <div />
                <Button type="submit" className="w-full md:w-auto">
                  Submit Details
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonatePage;
