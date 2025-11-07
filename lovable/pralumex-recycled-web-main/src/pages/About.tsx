import { CheckCircle2, Globe, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving Continental USA, Canada, South America, China, and beyond",
    },
    {
      icon: TrendingUp,
      title: "Proven Success",
      description: "35+ years of growth in a highly competitive market",
    },
    {
      icon: CheckCircle2,
      title: "Quality Service",
      description: "Consistently exceeding customer expectations",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly-trained professionals with deep industry knowledge",
    },
  ];

  const whyChooseUs = [
    "Consistently exceed customer expectations with exceptional service",
    "Highly-trained professional staff with extensive expertise",
    "Wealth of knowledge in the recycling trade",
    "Strong commitment to building long-term partnerships",
    "Proven track record in a highly competitive market",
    "Customized solutions tailored to your specific needs",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Established 1987
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Pralumex
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building sustainable partnerships and driving environmental impact for over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pralumex, Inc. was founded in 1987 with a clear vision: to provide exceptional
                service in the plastic recycling industry while contributing to a cleaner environment.
                What started as a local operation has grown into a trusted partner with an extensive
                network spanning the Continental United States, Canada, South America, China, and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the past three decades, we have built our reputation on consistently exceeding
                customer expectations through personalized service, industry expertise, and an unwavering
                commitment to quality. Our growth story is marked by the expansion of both our supplier
                and end-user networks, establishing us as a leader in the highly competitive plastic
                recycling market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="text-center animate-fade-in hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Pralumex?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Quote */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-semibold italic mb-6 leading-relaxed">
              "What could be more rewarding than to engage in a trade that plays an active role in
              the universal drive for a cleaner environment?"
            </blockquote>
            <p className="text-lg opacity-90">— Pralumex Founding Vision</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
