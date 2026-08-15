"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Nom
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        />
      </div>
      <p className="text-xs opacity-60">[À FOURNIR : mention RGPD et adresse de réception du formulaire]</p>
      <button
        type="submit"
        className="rounded-[10px] bg-fill text-on-pri text-[14.5px] font-semibold px-6 py-3 transition-[filter] hover:brightness-110"
      >
        Envoyer
      </button>
      {sent && <p className="text-sm text-pri">Message envoyé (démonstration — rien n&rsquo;a été transmis).</p>}
    </form>
  );
}
