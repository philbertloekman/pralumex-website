import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Mission = () => {
  const missionPoints = [
    "Promote client satisfaction and loyalty through exceptional service",
    "Improve profitability of engagements in the plastic recycling trade",
    "Provide links to marketing post-consumer and post-industrial plastic waste materials",
    "Offer lucrative alternatives to traditional waste management needs",
  ];

  const visionPoints = [
    {
      icon: Heart,
      title: "Value Customer Relationships",
      description: "We capitalize on the value of our customer relationships, building trust and mutual success.",
    },
    {
      icon: Sparkles,
      title: "Long-term Partnerships",
      description: "We establish enduring business partnerships with both suppliers and end-users.",
    },
    {
      icon: Target,
      title: "Exemplary Service",
      description: "We deliver unparalleled quality in both service and materials, every single time.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground">
              Guided by purpose, driven by excellence, committed to sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            </div>

            <Card className="bg-muted border-none">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  At Pralumex, our mission is to revolutionize the plastic recycling industry by
                  providing exceptional, customer-focused solutions that benefit both business and the environment.
                </p>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {visionPoints.map((point, index) => (
                <Card
                  key={point.title}
                  className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-6">Our Promise</h3>
                <p className="text-xl leading-relaxed opacity-90">
                  Whether you're buying or selling, Pralumex delivers unparalleled quality in service
                  and materials. We establish long-term business partnerships built on competitive pricing,
                  prompt settlements, and flexible terms. Our commitment to excellence ensures that every
                  engagement contributes to both your success and a cleaner environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
