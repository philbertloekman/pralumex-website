import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, DollarSign, Leaf, Handshake, ArrowRight } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/plastic-scrap.jpg";

const Home = () => {
  const scrapValues = [
    {
      icon: HeartHandshake,
      title: <><strong className="text-primary">Service</strong> is Our Focus</>,
      description: "Our highly-trained professional staff brings extensive knowledge and expertise to consistently exceed customer expectations and promote client satisfaction, loyalty, and profitability.",
    },
    {
      icon: Users,
      title: <><strong className="text-primary">Customer</strong> Satisfaction Comes First</>,
      description: "We provide customized, consultation-based service tailored to each customer's needs, supported by a reliable network of waste processors, logistics companies, and major shipping lines.",
    },
    {
      icon: Leaf,
      title: <><strong className="text-primary">Recycling</strong> is Rewarding</>,
      description: "Play an active role in the universal drive for a cleaner environment by contributing to the transformation of plastic waste into valuable second-generation by-products.",
    },
    {
      icon: DollarSign,
      title: <><strong className="text-primary">Avenues</strong> for Revenue</>,
      description: "Recycling generates extra revenue for all businesses. We link you to marketing opportunities for post-consumer and post-industrial plastic waste, offering lucrative alternatives for waste management.",
    },
    {
      icon: Handshake,
      title: <><strong className="text-primary">Promising</strong> Partnerships</>,
      description: "We establish long-term business partnerships with competitive quotes and prompt financial settlements to suppliers, flexible payment terms to buyers, and unparalleled quality service.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted Since 1987
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Service-Driven Plastic Recycling
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Your Partner in Sustainable Waste Management Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <NavLink to="/services">Our Services</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* S.C.A.R.P Values Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The S.C.R.A.P Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five pillars that define our commitment to excellence in plastic recycling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {scrapValues.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              35+ Years of Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 1987, Pralumex has grown from a local recycling operation to a trusted
              partner with an expanded network across the Continental USA, Canada, South America, and China.
              Our proven track record in this highly competitive market speaks to our commitment to service
              excellence and sustainable practices.
            </p>
            <p className="text-xl text-foreground font-semibold italic mb-8">
              "What could be more rewarding than to engage in a trade that plays an active role in the
              universal drive for a cleaner environment?"
            </p>
            <Button size="lg" asChild>
              <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>Learn More About Us</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Turn Your Plastic Waste into Revenue?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a competitive quote and discover how we can help you contribute
            to a cleaner environment while improving your bottom line.
          </p>
          <Button size="lg" className="text-lg px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <NavLink to="/contact">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
