export const siteConfig = {
  name: "BARBER CLUB",
  tagline: "Seu estilo. Sua assinatura.",
  description:
    "Barbearia contemporânea, atendimento de qualidade e estilo em cada detalhe.",
  phoneDisplay: "(51) 99999-9999",
  whatsappNumber: "5551999999999", // Substitua pelo número real, com DDI e DDD.
  address: "Adicione o endereço da sua barbearia",
  city: "Parobé, RS",
  instagram: "https://instagram.com/",
  openingHours: [
    { day: "Segunda a sexta", hours: "09h às 20h" },
    { day: "Sábado", hours: "09h às 18h" },
    { day: "Domingo", hours: "Fechado" }
  ]
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
