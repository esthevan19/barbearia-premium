export type BarberService = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  tag?: string;
};

export const services: BarberService[] = [
  { id: "corte", name: "Corte clássico", description: "Precisão, acabamento e estilo do seu jeito.", price: 45, duration: 40, tag: "Mais pedido" },
  { id: "fade", name: "Degradê / Fade", description: "Transição impecável com acabamento detalhado.", price: 50, duration: 45 },
  { id: "barba", name: "Barba premium", description: "Desenho, toalha quente e cuidado completo.", price: 35, duration: 30 },
  { id: "combo", name: "Corte + barba", description: "O combo completo para sair renovado.", price: 70, duration: 70, tag: "Combo" },
  { id: "tesoura", name: "Corte na tesoura", description: "Textura e caimento personalizados.", price: 50, duration: 45 },
  { id: "sobrancelha", name: "Sobrancelha", description: "Limpeza e alinhamento natural.", price: 15, duration: 15 }
];

export const barbers = [
  { name: "Rafael", role: "Especialista em degradê", initials: "RA", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85" },
  { name: "Lucas", role: "Cortes clássicos e tesoura", initials: "LU", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85" },
  { name: "Matheus", role: "Barba e visagismo", initials: "MA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85" }
];
