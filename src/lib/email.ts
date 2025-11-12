const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export const emailConfig = {
  serviceId: "service_ffpxj2e",
  publicKey: "PMGMpkgghZYOOF15M",
  contactTemplateId: "template_05rcdxe",
  orderTemplateId: "template_owg0pb8",
  recipientEmail: "client@asmouta.com",
};

type TemplateParams = Record<string, unknown>;

export const sendEmail = async (templateId: string, templateParams: TemplateParams) => {
  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: emailConfig.serviceId,
      template_id: templateId,
      user_id: emailConfig.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Email sending failed.");
  }
};
