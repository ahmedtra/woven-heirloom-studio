import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/utils";
import { emailConfig, sendEmail } from "@/lib/email";
import {
  getDiscountedPrice,
  getSalePercentLabel,
  isSaleActive,
  SALE_EVENT_NAME,
} from "@/lib/pricing";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const salePercentLabel = getSalePercentLabel();
  const saleActive = isSaleActive();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Aucun article dans le panier</h1>
            <Button onClick={() => navigate("/shop")}>Poursuivre vos achats</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmitOrder = async () => {
    const orderId = `CMD-${Date.now()}`;
    const shippingCost = 0;
    const taxCost = 0;
    const orderSubtotal = getCartTotal();
    const orderTotal = orderSubtotal + shippingCost + taxCost;

    const addressParts = [
      shippingInfo.address?.trim(),
      [shippingInfo.postalCode, shippingInfo.city].filter(Boolean).join(" ").trim(),
      shippingInfo.country?.trim(),
    ].filter((part) => part && part.length > 0);

    const customerName = shippingInfo.fullName.trim() || "Client";
    const customerEmail = shippingInfo.email.trim();
    const customerPhone = shippingInfo.phone.trim();
    const replyEmail = customerEmail || emailConfig.recipientEmail;
    const shippingAddress = addressParts.length > 0 ? addressParts.join(", ") : "Adresse non fournie";

    const itemsHtml = `
      <table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
        ${items
          .map(
            (item) => `
              <tr>
                <td style="padding: 8px 0; text-align: left;">
                  <div style="font-weight: 600;">${item.name}</div>
                  <div style="font-size: 12px; color: #666;">Quantité : ${item.quantity}</div>
                </td>
                <td style="padding: 8px 0; text-align: right; white-space: nowrap;">
                  ${formatCurrency(getDiscountedPrice(item.price) * item.quantity)}
                </td>
              </tr>
            `,
          )
          .join("")}
      </table>
    `.trim();

    const costSummary = {
      shipping: shippingCost.toFixed(2),
      tax: taxCost.toFixed(2),
      total: orderTotal.toFixed(2),
    };

    const orderTimestamp = new Date().toLocaleString("fr-FR", { hour12: false });

    try {
      setIsSubmittingOrder(true);
      await sendEmail(emailConfig.orderTemplateId, {
        order_id: orderId,
        subject: `Nouvelle commande ${orderId}`,
        name: customerName,
        customer_name: customerName,
        email: customerEmail || "Non communiqué",
        customer_email: customerEmail || "Non communiqué",
        phone: customerPhone || "Non communiqué",
        address: shippingAddress,
        shipping_address: shippingAddress,
        items_html: itemsHtml,
        cost: costSummary,
        order_subtotal: orderSubtotal.toFixed(2),
        cost_shipping: costSummary.shipping,
        cost_tax: costSummary.tax,
        cost_total: costSummary.total,
        order_total_formatted: formatCurrency(orderTotal),
        order_timestamp: orderTimestamp,
        to_email: emailConfig.recipientEmail,
        from_name: customerName,
        from_email: replyEmail,
        reply_to: replyEmail,
      });

      toast({
        title: "Commande transmise !",
        description: "Merci pour votre commande. Nous vous contacterons rapidement.",
      });

      clearCart();
      navigate("/");
    } catch (error) {
      toast({
        title: "Impossible d'envoyer la commande",
        description: "Veuillez vérifier votre connexion et réessayer.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Finaliser la commande</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  1
                </div>
                <span className="ml-2 font-medium">Livraison</span>
              </div>
              <div className="w-12 h-0.5 bg-border" />
              <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  2
                </div>
                <span className="ml-2 font-medium">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de livraison</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Nom complet</Label>
                        <Input
                          id="fullName"
                          value={shippingInfo.fullName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Adresse</Label>
                      <Input
                        id="address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        placeholder=""
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">Ville</Label>
                        <Input
                          id="city"
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Code postal</Label>
                        <Input
                          id="postalCode"
                          value={shippingInfo.postalCode}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                          placeholder=""
                        />
                    </div>
                    <div>
                      <Label htmlFor="country">Pays</Label>
                        <Input
                          id="country"
                          value={shippingInfo.country}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <Button onClick={() => setStep(2)} className="w-full">
                      Continuer vers la confirmation
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Review */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Vérifiez votre commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Adresse de livraison</h3>
                      <p className="text-sm text-muted-foreground">
                        {shippingInfo.fullName}<br />
                        {shippingInfo.address}<br />
                        {shippingInfo.city}, {shippingInfo.postalCode}<br />
                        {shippingInfo.country}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Téléphone : {shippingInfo.phone || "Non communiqué"}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Paiement</h3>
                      <p className="text-sm text-muted-foreground">
                        Paiement à la livraison. Nous vous contacterons pour convenir des modalités lors de la remise du produit.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Articles de la commande</h3>
                      <div className="space-y-2">
                        {items.map((item) => {
                          const salePrice = getDiscountedPrice(item.price);
                          const lineTotal = salePrice * item.quantity;
                          const hasDiscount = salePrice !== item.price;
                          return (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <div className="text-right">
                                <span>{formatCurrency(lineTotal)}</span>
                                {hasDiscount && (
                                  <span className="block text-xs text-muted-foreground line-through">
                                    {formatCurrency(item.price * item.quantity)}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Retour
                      </Button>
                      <Button onClick={handleSubmitOrder} className="flex-1" disabled={isSubmittingOrder}>
                        {isSubmittingOrder ? "Envoi..." : "Confirmer la commande"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Récapitulatif de commande</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {items.map((item) => {
                      const salePrice = getDiscountedPrice(item.price);
                      const lineTotal = salePrice * item.quantity;
                      const hasDiscount = salePrice !== item.price;
                      return (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <div className="text-right">
                            <span>{formatCurrency(lineTotal)}</span>
                            {hasDiscount && (
                              <span className="block text-xs text-muted-foreground line-through">
                                {formatCurrency(item.price * item.quantity)}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <div className="pt-3 border-t space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sous-total</span>
                        <span>{formatCurrency(getCartTotal())}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Livraison</span>
                        <span>OFFERT</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total</span>
                          <span className="text-primary">{formatCurrency(getCartTotal())}</span>
                        </div>
                        {saleActive && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {SALE_EVENT_NAME} : {salePercentLabel} de remise inclus.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
