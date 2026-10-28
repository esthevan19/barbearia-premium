"use client";

import { useState } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function BookingForm({ selectedService }: { selectedService: string }) {
  const [serviceId, setServiceId] = useState(selectedService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const service = services.find((item) => item.id === serviceId) ?? services[0];
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim() || !date || !time) {
      setError("Preencha seu nome, telefone, data e horário.");
      return;
    }
    if (date < minDate) {
      setError("Escolha uma data de hoje em diante.");
      return;
    }
    const message = [
      `Olá! Gostaria de consultar um agendamento na ${siteConfig.name}.`,
      `Nome: ${name.trim()}`,
      `Telefone: ${phone.trim()}`,
      `Serviço: ${service.name}`,
      `Data desejada: ${date.split("-").reverse().join("/")}`,
      `Horário desejado: ${time}`,
      notes.trim() ? `Observações: ${notes.trim()}` : "",
      "",
      "Se possível, confirmem se esse horário está disponível."
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return <form className="booking-form" onSubmit={handleSubmit}>
    <div className="notice">Este formulário prepara uma solicitação pelo WhatsApp. O horário só estará reservado após confirmação da equipe.</div>
    <div className="field"><label htmlFor="service">Serviço</label><select id="service" value={serviceId} onChange={(event) => setServiceId(event.target.value)}>{services.map((item) => <option key={item.id} value={item.id}>{item.name} — R$ {item.price.toFixed(2).replace(".", ",")} ({item.duration} min)</option>)}</select></div>
    <div className="field"><label htmlFor="name">Seu nome</label><input id="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos te chamar?" required maxLength={100}/></div>
    <div className="field"><label htmlFor="phone">Seu telefone</label><input id="phone" type="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="(51) 99999-9999" required maxLength={30}/></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:16}}>
      <div className="field"><label htmlFor="date">Data desejada</label><input id="date" type="date" min={minDate} value={date} onChange={(event) => setDate(event.target.value)} required/></div>
      <div className="field"><label htmlFor="time">Horário desejado</label><select id="time" value={time} onChange={(event) => setTime(event.target.value)}>{["09:00","09:30","10:00","10:30","11:00","11:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"].map((slot) => <option key={slot} value={slot}>{slot}</option>)}</select></div>
    </div>
    <div className="field"><label htmlFor="notes">Observações (opcional)</label><textarea id="notes" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Ex.: preferência de corte ou profissional" rows={3} maxLength={500}/></div>
    {error && <p className="error" role="alert">{error}</p>}
    <button type="submit" className="btn btn-primary" style={{width:"100%"}}><MessageCircle size={18}/> Solicitar pelo WhatsApp</button>
    <p style={{color:"var(--muted)",fontSize:".8rem",margin:0,textAlign:"center"}}>Valores e disponibilidade serão confirmados pela equipe.</p>
  </form>;
}
