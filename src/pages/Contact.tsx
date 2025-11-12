import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Printer, Clock, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Contact = () => {

  // State for current time and business status
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  // Check if business is currently open
  const checkBusinessStatus = (date: Date) => {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Monday (1) to Friday (5), 9:00 AM (540 minutes) to 5:00 PM (1020 minutes)
    const openingTime = 9 * 60; // 9:00 AM = 540 minutes
    const closingTime = 17 * 60; // 5:00 PM = 1020 minutes

    const isWeekday = day >= 1 && day <= 5;
    const isDuringBusinessHours = currentMinutes >= openingTime && currentMinutes < closingTime;

    return isWeekday && isDuringBusinessHours;
  };

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      setIsOpen(checkBusinessStatus(now));
    };

    // Initial update
    updateTime();

    // Update every second for real-time display
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time as "10:00 AM"
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const contactInfo = [
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-base text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-base text-muted-foreground whitespace-pre-line">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Business Hours */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm">
                    <p className="font-medium text-foreground">20258 Carrey Road</p>
                    <p className="text-muted-foreground">Walnut, CA 91789</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps/place/Pralumex,+Inc./@34.0135754,-117.8636291,16z/data=!3m1!4b1!4m6!3m5!1s0x80c32ba0f4cc2eb7:0xfd4def2bb76270a7!8m2!3d34.0135754!4d-117.8610542!16s%2Fg%2F1tdd0z85?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1234567890123!2d-117.8636291!3d34.0135754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32ba0f4cc2eb7%3A0xfd4def2bb76270a7!2sPralumex%2C%20Inc.!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pralumex Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                    <Badge
                      className={`${
                        isOpen
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      } border-0 px-3 py-1`}
                    >
                      {isOpen ? "Open" : "Closed"} | {formatTime(currentTime)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 1
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Monday</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 2
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Tuesday</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 3
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Wednesday</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 4
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Thursday</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 5
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 6
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div
                      className={`flex justify-between p-3 rounded-xl transition-all duration-300 ${
                        currentTime.getDay() === 0
                          ? "bg-gray-100 border border-gray-300"
                          : ""
                      }`}
                    >
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4">
                      Hours may vary during major holidays.
                    </p>
                  </div>
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
