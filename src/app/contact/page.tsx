"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Mande uma mensagem</h2>

        {submitSuccess ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center">
            <p className="font-medium">Obrigado pela mensagem!</p>
            <p>Eu entrarei em contato o mais breve possível.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Seu nome
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Seu email
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Assunto
              </label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Sua mensagem
              </label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
            </div>

            <Button type="submit" className="w-full flex items-center justify-center" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
