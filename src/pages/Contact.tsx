import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { emailConfig, sendEmail } from "@/lib/email";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const subject = (formData.get("subject") ?? "").toString().trim() || `Message de ${name || "client"}`;
    const message = (formData.get("message") ?? "").toString().trim();
    const timestamp = new Date().toLocaleString("fr-FR", { hour12: false });

    try {
      setIsSubmitting(true);
      await sendEmail(emailConfig.contactTemplateId, {
        name,
        email,
        subject,
        time: timestamp,
        message,
        to_email: emailConfig.recipientEmail,
        from_name: name || "Client",
        from_email: email,
        reply_to: email,
      });
      toast({
        title: "Message envoyé !",
        description: "Merci de nous avoir contactés. Nous vous répondrons rapidement.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Impossible d'envoyer votre message pour le moment. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nous contacter</h1>
            <p className="text-lg text-muted-foreground">
              Nous serions ravis d'échanger avec vous
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Écrivez-nous</h3>
                <p className="text-sm text-muted-foreground">client@asmouta.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Appelez-nous</h3>
                <p className="text-sm text-muted-foreground">+216 93226072</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Venez nous voir</h3>
                <p className="text-sm text-muted-foreground">Soukra 2036<br />Tunis</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" name="name" placeholder="Votre nom" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" name="email" type="email" placeholder="vous@email.com" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" name="subject" placeholder="Comment pouvons-nous vous aider ?" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Parlez-nous de votre demande..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
