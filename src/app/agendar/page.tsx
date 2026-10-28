import Link from "next/link";
import { ArrowLeft, CalendarDays, MessageCircle, Scissors } from "lucide-react";
import BookingForm from "@/components/booking-form";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata = { title: `Agendar | ${siteConfig.name}` };

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ servico?: string }> }) {
  const params = await searchParams;
  const selected = services.find((service) => service.id === params.servico)?.id ?? services[0].id;
  return <main className="form-wrap">
    <div className="container" style={{maxWidth:760}}>
      <Link href="/" className="text-link" style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:30}}><ArrowLeft size={16}/> Voltar ao site</Link>
      <div style={{marginBottom:28}}>
        <div className="brand"><span className="brand-mark"><Scissors size={20}/></span>{siteConfig.name}</div>
        <span className="eyebrow" style={{display:"block",marginTop:28}}>Agendamento</span>
        <h1 style={{fontSize:"clamp(2.4rem,7vw,4rem)",letterSpacing:"-.05em",margin:"10px 0"}}>Reserve seu momento.</h1>
        <p style={{color:"var(--muted)",lineHeight:1.8}}>Preencha seus dados e abra uma conversa no WhatsApp para confirmar a disponibilidade. Este modelo ainda não grava reservas em um banco de dados.</p>
      </div>
      <BookingForm selectedService={selected}/>
      <p style={{color:"var(--muted)",fontSize:".82rem",lineHeight:1.7,marginTop:18}}>Ao continuar, seus dados serão incluídos na mensagem que você escolher abrir no WhatsApp. Confira as informações antes de enviar.</p>
    </div>
  </main>;
}
