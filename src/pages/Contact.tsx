import { useState } from "react";
import { MapPin, Phone, Mail, Printer, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiry: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "20258 Carrey Road\nWalnut, CA 91789\nUnited States",
      link: "https://maps.google.com/?q=20258+Carrey+Road,+Walnut,+CA+91789",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (909) 594-7070",
      link: "tel:+19095947070",
    },
    {
      icon: Printer,
      title: "Fax",
      content: "+1 (909) 594-7575",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      content: "plastic@pralumex.com",
      link: "mailto:plastic@pralumex.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to turn your plastic waste into revenue? Contact us today for a competitive quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="animate-fade-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Type of Inquiry</Label>
                    <Input
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      placeholder="e.g., Quote Request, General Question"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your recycling needs..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Hours & Map */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday</span>
                      <span className="font-medium">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tuesday</span>
                      <span className="font-medium">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wednesday</span>
                      <span className="font-medium">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thursday</span>
                      <span className="font-medium">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-medium">8:30 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8842877486874!2d-117.86847!3d34.02286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32b1c9f9f5555%3A0x5555555555555555!2s20258%20Carrey%20Rd%2C%20Walnut%2C%20CA%2091789!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pralumex Location"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
