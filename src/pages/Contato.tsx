import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const Contato: React.FC = () => {
  return (
    <>
      <SEO
        title="Fale Conosco | Cicarelli Advogados"
        description="Entre em contato com nossa equipe para agendar uma consulta gratuita."
      />
      <div className="py-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Entre em Contato
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sua urgência é nossa prioridade. Escolha o melhor canal de
              atendimento para você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Phone,
                    label: "Atendimento Fixo",
                    val: "(11) 3013-0001",
                    href: "tel:1130130001",
                    color: "text-blue-600",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp Urgência",
                    val: "(41) 99958-0015",
                    href: "https://wa.me/5541999580015?text=Olá,%20vim%20pela%20Página%20de%20Contato%20do%20site",
                    color: "text-green-600",
                  },
                  {
                    icon: Mail,
                    label: "E-mail Jurídico",
                    val: "contato@cicarelli.adv.br",
                    href: "mailto:contato@cicarelli.adv.br",
                    color: "text-accent",
                  },
                  {
                    icon: Clock,
                    label: "Disponibilidade",
                    val: "Digital 24h | Físico 09h às 18h",
                    color: "text-gray-500",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="border-none shadow-sm hover:shadow-elegant transition-all"
                  >
                    <CardContent className="p-6">
                      <item.icon
                        className={`h-8 w-8 mb-4 ${item.color || ""}`}
                      />
                      <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium hover:text-accent transition-colors"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{item.val}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1 uppercase tracking-wider">
                      Unidade Paraná (HQ)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rua Comendador Araújo, 499 - 10º Andar
                      <br />
                      Batel, Curitiba - PR
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1 uppercase tracking-wider">
                      Unidade São Paulo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Atendimento Híbrido & Digital
                      <br />
                      Capital, Grande SP e Interior
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Form */}
            <Card className="shadow-elegant border-none p-2 bg-muted/40">
              <CardContent className="p-8 bg-white rounded-2xl h-full">
                <h3 className="text-2xl font-serif mb-8 text-primary">
                  Envie sua mensagem
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <Input placeholder="Seu nome" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">WhatsApp</label>
                      <Input placeholder="(41) 99999-9999" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">E-mail</label>
                    <Input placeholder="seu@email.com" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Assunto</label>
                    <Input
                      placeholder="Ex: Negativa de cirurgia"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea
                      placeholder="Como podemos te ajudar hoje?"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full h-14 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90">
                    Enviar Mensagem Agora
                  </Button>
                </form>
                <p className="mt-6 text-[10px] text-muted-foreground text-center leading-relaxed">
                  Ao enviar você concorda com nossos Termos de Uso e Política de
                  Privacidade. Suas informações estão protegidas conforme a
                  LGPD.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
