"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  formspreeEndpoint: string;
}

export default function ContactForm({ formspreeEndpoint }: ContactFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-light mb-2">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          id="name"
          className="w-full bg-transparent border-b border-muted pb-2 focus:border-accent outline-none transition-colors duration-300 text-base"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-light mb-2">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          className="w-full bg-transparent border-b border-muted pb-2 focus:border-accent outline-none transition-colors duration-300 text-base"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-light mb-2">
          Message
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          id="message"
          rows={5}
          className="w-full bg-transparent border-b border-muted pb-2 focus:border-accent outline-none transition-colors duration-300 text-base resize-none"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-green-400"
        >
          Thanks, I&apos;ll be in touch.
        </motion.p>
      )}

      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-400"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={!isLoading ? { backgroundColor: "var(--accent)" } : {}}
        className="w-full md:w-auto px-8 py-3 bg-accent text-black font-light rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send"}
      </motion.button>
    </form>
  );
}
