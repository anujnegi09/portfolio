"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your email/API functionality later
    console.log("Form submitted");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-15 w-full bg-background text-foreground px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Let's connect
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm currently looking for opportunities as a Software
              Developer, React Developer, or Full Stack Developer.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:your-email@example.com"
                  className="mt-1 inline-block text-gray-200 transition-colors hover:text-violet-400"
                >
                  your-email@example.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/anuj-negi-65442b349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-gray-200 transition-colors hover:text-violet-400"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/anujnegi09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-gray-200 transition-colors hover:text-violet-400"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                placeholder="Your name"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}