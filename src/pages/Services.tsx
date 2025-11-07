import { Truck, Recycle, Ship, Package, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Equipment Drop-off & Shipment Pick-up",
      description: "We dispatch volume-appropriate equipment including compactors, baling machines, trailers, and roll-off bins. Professional haulers are dispatched upon supplier confirmation, routing shipments to handlers and reclaimers.",
    },
    {
      icon: Recycle,
      title: "Converting & Adding Value",
      description: "Through affiliate Materials Recovery Facilities, we provide sorting, densifying, and processing services for full or partial container loads. Materials are stored until sufficient export quantity is reached, ensuring all vendor and end-user specifications are met.",
    },
    {
      icon: Ship,
      title: "Coordinate Sales with Overseas Partners",
      description: "We confirm buyers for quantity and delivery, book timely shipments of fabricated value-added materials, and arrange ocean freight shipping to end-users in specified quantities.",
    },
  ];

  const plasticTypes = [
    { code: "1", name: "PET", fullName: "Polyethylene Terephthalate", forms: "Clear and green bottles, baled and reground" },
    { code: "2", name: "HDPE", fullName: "High Density Polyethylene", forms: "Post-consumer film or grocery bags" },
    { code: "3", name: "PVC/Vinyl", fullName: "Polyvinyl Chloride", forms: "Blister packs, clamshell, shrink wrap, pipe, siding, fencing, decking, railing" },
    { code: "4", name: "LDPE", fullName: "Low Density Polyethylene", forms: "Film with or without print" },
    { code: "5", name: "PP", fullName: "Polypropylene", forms: "Food containers, medicine bottles, bottle caps" },
    { code: "6", name: "PS", fullName: "Polystyrene", forms: "CD casing, video cassette cartridge, coat hangers" },
  ];

  const specialtyPlastics = [
    "MDPE (Medium-density Polyethylene film)",
    "ABS (Acrylonitrile-butadiene-styrene)",
    "PA (Nylon)",
    "PCR",
    "PC/ABS",
    "Acrylic",
    "Acetal",
  ];

  const materialForms = [
    "Surplus",
    "Repro",
    "Regrind",
    "Rolls",
    "Film",
    "Scrap (lumped, chunked/purged/hard)",
    "Off-grade resins",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive plastic recycling solutions customized to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              We provide a consultation-based approach to understand your recycling needs and deliver
              customized service backed by our network of reliable waste processors, logistics companies,
              and major shipping lines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials We Purchase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Package className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Materials We Purchase</h2>
            </div>

            {/* Common Plastics Table */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Common Plastics (Resin Codes 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Code</TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Full Name</TableHead>
                        <TableHead className="font-semibold">Forms Accepted</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {plasticTypes.map((plastic) => (
                        <TableRow key={plastic.code}>
                          <TableCell className="font-medium">{plastic.code}</TableCell>
                          <TableCell className="font-medium">{plastic.name}</TableCell>
                          <TableCell>{plastic.fullName}</TableCell>
                          <TableCell>{plastic.forms}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Specialty Plastics */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Specialty Plastics (Code 7 - All Others)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {specialtyPlastics.map((plastic, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{plastic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Material Forms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Material Forms Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {materialForms.map((form, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{form}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6 text-center">Our Network & Value</h3>
                <div className="space-y-4 text-lg">
                  <p className="opacity-90">
                    Our carefully chosen network of waste and recycling processors, logistics companies,
                    and major shipping lines ensures proven reliability at every step.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    <div className="text-center">
                      <p className="font-semibold text-xl mb-2">Competitive Quotes</p>
                      <p className="opacity-80 text-sm">Best market pricing</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-xl mb-2">Prompt Settlements</p>
                      <p className="opacity-80 text-sm">Fast financial processing</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-xl mb-2">Flexible Terms</p>
                      <p className="opacity-80 text-sm">Tailored to your needs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
