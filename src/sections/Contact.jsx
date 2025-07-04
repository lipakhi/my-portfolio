import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60f0y2n",   // 🔁 Replace this
        "template_0k91nls",  // 🔁 Replace this
        form.current,
        "2_BX93t8h3t7HoRbR"    // 🔁 Replace this
      )
      .then(
        (result) => {
          setStatus("Message sent!");
          form.current.reset();
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300"
    >
      <div className="text-center text-3xl font-bold text-accentPrimLight dark:text-accentPrimDark mb-8">
          <Typewriter
            words={["Contact"]}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </div>
      

      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-lightSubText dark:text-darkSubText mb-4 text-lg">
          Feel free to reach out via this form or directly at{" "}
          <span className="text-accentSecLight dark:text-accentSecDark font-medium">
            tripathylipakhi@gmail.com
          </span>
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-lightSubText/10 dark:bg-darkSubText/20 text-lightText dark:text-darkText placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accentPrimLight dark:focus:ring-accentPrimDark"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-lightSubText/10 dark:bg-darkSubText/20 text-lightText dark:text-darkText placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accentPrimLight dark:focus:ring-accentPrimDark"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-lightSubText/10 dark:bg-darkSubText/20 text-lightText dark:text-darkText placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-accentPrimLight dark:focus:ring-accentPrimDark"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-accentSecLight dark:bg-accentSecDark text-white rounded-md hover:scale-105 transition"
          >
            <Send size={18} /> Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-accentPrimLight dark:text-accentPrimDark mt-2">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
