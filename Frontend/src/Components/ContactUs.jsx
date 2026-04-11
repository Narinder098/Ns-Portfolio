import { socialLinks } from '../data/Social';
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [lastSent, setLastSent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sending) return;

    const formData = new FormData(formRef.current);

    // 🪤 Honeypot
    if (formData.get("company")) return;

    // ⏱️ Cooldown
    const now = Date.now();
    if (now - lastSent < 60000) {
      toast.error("Please wait before sending again ⏳");
      return;
    }

    // ✅ Validation
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("All fields are required ❗");
      return;
    }

    setSending(true);
    const toastId = toast.loading("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent ✅", { id: toastId });
        formRef.current.reset();
        setLastSent(Date.now());
      })
      .catch(() => {
        toast.error("Failed ❌", { id: toastId });
      })
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 md:px-16 py-24">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-20">
        <span className="text-yellow-500 font-serif text-sm italic">06.</span>
        <h2 className="font-serif text-4xl">Get In Touch</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <h3 className="font-serif text-4xl leading-tight mb-6">
            Let's build something great together.
          </h3>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
            I'm currently open to Software Developer roles and internships —
            full-time or remote. Whether you have a project in mind or just want
            to connect, I'd love to hear from you.
          </p>

          <div className="flex flex-col gap-5">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-yellow-500 transition">
                  <div className="w-10 h-10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <Icon size={16} />
                  </div>

                  <span>{item.href.replace("https://", "")}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2 block">
                Your Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#1a2f45] border border-yellow-500/20 px-5 py-4 text-sm outline-none focus:border-yellow-500" />
              <input
                type="text"
                name="company"
                style={{ display: "none" }}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2 block">
                Email Address
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="john@company.com"
                className="w-full bg-[#1a2f45] border border-yellow-500/20 px-5 py-4 text-sm outline-none focus:border-yellow-500" />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-[#1a2f45] border border-yellow-500/20 px-5 py-4 text-sm min-h-[150px] outline-none resize-none focus:border-yellow-500">
              </textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={sending}
              className="bg-yellow-500 text-black px-10 py-4 text-xs uppercase tracking-widest font-semibold w-fit hover:bg-yellow-400 transition">
              {sending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}