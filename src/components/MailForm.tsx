// components/ContactForm.tsx
"use client"
import { useState } from "react";
import React from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("送信が完了しました！");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("送信に失敗しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="お名前"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="メールアドレス"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="お問い合わせ内容"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded h-32"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        送信
      </button>
      <p>{status}</p>
    </form>
  );
}
