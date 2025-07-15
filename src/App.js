import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "./header";
import Form from "./components/Form";

export default function ResumeWebsite() {
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border-b border-gray-700 py-4"
      >
        <h3 className="text-xl font-medium flex justify-between items-center">
          {question}
          <span>{isOpen ? "−" : "+"}</span>
        </h3>
        {isOpen && <p className="mt-2 text-blue-900">{answer}</p>}
      </div>
    );
  };

  const controls = useAnimation();

  const cards = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi1.jpg`,
      alt: "testimonial 1",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi2.jpg`,
      alt: "testimonial 2",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi3.jpg`,
      alt: "testimonial 3",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi4.jpg`,
      alt: "testimonial 4",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi5.jpg`,
      alt: "testimonial 5",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/testimonials/testi6.jpg`,
      alt: "testimonial 6",
    },
  ];

  const cards1 = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/resources/resource1.png`,
      alt: "resource 1",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/resources/resource2.png`,
      alt: "resource 2",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/resources/resource3.png`,
      alt: "resource 3",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/resources/resource4.png`,
      alt: "resource 4",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/resources/resource5.png`,
      alt: "resource 5",
    },
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="relative text-white min-h-screen font-sans scroll-smooth">
      <Header />

      <motion.section
        className="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-20 pt-20"
        id="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background video with overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={`${process.env.PUBLIC_URL}/books.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-white/60" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-blue-700 tracking-tight mb-5"
          >
            Maths. Biology. Chemistry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight mt-6 mb-4"
          >
            <strong>O, A-Level & IB.</strong> We've got you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-lg text-blue-500 mt-4 font-extrabold"
          >
            Clear concepts. Smart strategies. Proven results.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight leading-tight">
          Choose Confidence.
          <br />
          <span className="block mt-4 text-blue-600">
            Experience Excellence.
          </span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Block 1 */}
          <div className="shimmer-white-bg p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 text-center">
            <div className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 animate-pulse glow-text mb-2">
              100%
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">
              Tailored Lessons
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Every session crafted to meet unique student goals.
            </p>
          </div>

          {/* Block 2 */}
          <div className="shimmer-white-bg p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 text-center">
            <div className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 animate-pulse glow-text mb-2">
              7+
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">
              Years of Experience
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Consistent results. Deeper confidence. Lasting skills.
            </p>
          </div>

          {/* Block 3 */}
          <div className="shimmer-white-bg p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 text-center">
            <div className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 animate-pulse glow-text mb-2">
              3
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">
              Flexible Modes
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Zoom. In-person. Group — your choice, your pace.
            </p>
          </div>

          {/* Block 4 */}
          <div className="shimmer-white-bg p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 text-center">
            <div className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 animate-pulse glow-text mb-2">
              5
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">
              Core Values
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Patience. Clarity. Empathy. Feedback. Progress.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white"
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight">
          Real Messages.
          <br />
          <span className="block mt-5 text-blue-600">Real Results.</span>
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-600 mt-4 font-light max-w-3xl mx-auto mt-10">
          Celebrating every win, one student at a time. Hear it from students
          and parents who’ve seen results.
        </p>
        <div className="overflow-x-auto mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 max-w-[280px] max-h-[350px] overflow-hidden">
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white"
        id="resource"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight">
          Built to Support.
          <br />
          <span className="block mt-5 text-blue-600">Ready to Elevate.</span>
        </h2>
        <p className="text-lg leading-relaxed text-black py-10">
          To support student success, we've established a{" "}
          <strong className="text-blue-700">
            robust academic resource platform
          </strong>
          , including a <strong className="text-blue-700">Google Drive</strong>{" "}
          and a <strong className="text-blue-700">Telegram channel</strong>. The
          Google Drive serves as a{" "}
          <strong className="text-blue-700">central repository</strong> for
          essential learning materials, such as{" "}
          <strong className="text-blue-700">detailed class notes</strong>,{" "}
          <strong className="text-blue-700">
            practice homework with solutions
          </strong>
          , and a curated archive of{" "}
          <strong className="text-blue-700">
            past year papers with comprehensive solutions
          </strong>
          . Complementing this, the exclusive Telegram channel actively
          addresses student needs by sharing{" "}
          <strong className="text-blue-700">
            insights on commonly encountered questions
          </strong>{" "}
          and <strong className="text-blue-700">common errors</strong>, thereby
          proactively guiding students to{" "}
          <strong className="text-blue-700">avoid pitfalls</strong> and{" "}
          <strong className="text-blue-700">deepen their understanding</strong>.
        </p>

        <p className="text-lg leading-relaxed text-black py-5">
          To ensure all students feel comfortable participating, our{" "}
          <strong className="text-blue-700">online classes</strong> incorporate
          an{" "}
          <strong className="text-blue-700">
            interactive Poll Everywhere platform
          </strong>
          , enabling all students to{" "}
          <strong className="text-blue-700">
            anonymously submit questions
          </strong>{" "}
          throughout the session{" "}
          <strong className="text-blue-700">without hesitation</strong>.
        </p>

        {/*Photos
        <div className="overflow-x-auto mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {cards1.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 max-w-[380px] max-h-[460px] overflow-hidden">
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>  */}

        {/* Pics */}
        <div className="overflow-hidden whitespace-nowrap w-full py-20">
          <div className="animate-marquee flex w-max">
            {[...Array(2)].map((_, i) => (
              <div className="inline-block" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/resources/resource1.png`}
                  alt="resource1"
                  className="h-[400px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/resources/resource2.png`}
                  alt="resource2"
                  className="h-[400px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/resources/resource3.png`}
                  alt="resource3"
                  className="h-[400px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/resources/resource4.png`}
                  alt="resource4"
                  className="h-[400px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/resources/resource5.png`}
                  alt="resource5"
                  className="h-[400px] mx-6 inline"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fees */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white min-h-screen"
        id="fees"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight">
          Transparent Fees.
          <br />
          <span className="block mt-5 text-blue-600">No Surprises.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {/* Box 1 */}
          <a href="#contact" className="block no-underline">
            <div className="rounded-2xl shadow-lg p-6 border border-blue-200 text-center bg-blue-50 transform transition ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-100">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Group (Online)
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Max <strong>5</strong> students
              </p>
              <p className="text-3xl font-bold text-blue-700">
                <span className="text-sm align-middle mr-1">From</span>
                <span>$40/hr</span>
              </p>
            </div>
          </a>

          {/* Box 2 */}
          <a href="#contact" className="block no-underline">
            <div className="rounded-2xl shadow-lg p-6 border border-blue-200 text-center bg-blue-50 transform transition ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-100">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                1-to-1 (Online)
              </h3>
              <p className="text-sm text-gray-700 mb-4">Flexible timing</p>
              <p className="text-3xl font-bold text-blue-700">
                <span className="text-sm align-middle mr-1">From</span>
                <span>$60/hr</span>
              </p>
            </div>
          </a>

          {/* Box 3 */}
          <a href="#contact" className="block no-underline">
            <div className="rounded-2xl shadow-lg p-6 border border-blue-200 text-center bg-blue-50 transform transition ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-100">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                1-to-1 (In-Person)
              </h3>
              <p className="text-sm text-gray-700 mb-4">Your home</p>
              <p className="text-3xl font-bold text-blue-700">
                <span className="text-sm align-middle mr-1">From</span>
                <span>$70/hr</span>
              </p>
            </div>
          </a>
        </div>
      </motion.section>

      {/* Top Schools */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white"
        id="Top"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section title for logos */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight leading-tight">
          They came to us with questions.
          <br />
          <span className="block mt-4 text-blue-600">
            They left with offers.
          </span>
        </h2>

        {/* Scrolling logo row */}
        <div className="overflow-hidden whitespace-nowrap w-full py-20">
          <div className="animate-marquee flex w-max">
            {[...Array(2)].map((_, i) => (
              <div className="inline-block" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/logo/rilogo.png`}
                  alt="RI"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/hcilogo.png`}
                  alt="HCI"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/nyjclogo.png`}
                  alt="NYJC"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/njclogo.png`}
                  alt="NJC"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/vjclogo.png`}
                  alt="VJC"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/nuslogo.png`}
                  alt="NUS"
                  className="h-[190px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/ntulogo.png`}
                  alt="NTU"
                  className="h-[190px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/acsilogo.png`}
                  alt="ACSI"
                  className="h-[150px] mx-6 inline"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/logo/uwclogo.png`}
                  alt="UWC"
                  className="h-[150px] mx-6 inline"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-gradient-to-b from-white via-blue-300 to-white"
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight">
          Got Questions?
          <br />
          <span className="block mt-5 text-blue-600">We've Got Answers.</span>
        </h2>
        <div className="space-y-4 text-blue-600 mt-10">
          {[
            {
              question: "When will I be billed?",
              answer: "You will be billed at the end of every calendar month.",
            },
            {
              question: "How would payment be made?",
              answer:
                "Payment is through PayNow, PayLah, Cash, or direct bank transfer.",
            },
            {
              question: "Do you provide free trial classes?",
              answer:
                "No. All classes are chargeable. However, students may choose to discontinue after the first lesson if they find it unsuitable.",
            },
            {
              question: "What subjects do EZA offer?",
              answer:
                "We specialize in Mathematics, Biology, and Chemistry at the O-Level, A-Level, and IB levels.",
            },
            {
              question: "How are class times scheduled?",
              answer:
                "Our classes run daily from Monday to Sunday, and schedules are arranged based on your availability. Kindly fill out the form below, and we will follow up to match you with suitable time slots.",
            },
            {
              question: "How are online classes conducted?",
              answer:
                "Online lessons are conducted via Zoom in small groups (up to 5 students) with interactive tools like Poll Everywhere to encourage participation.",
            },
            {
              question: "What is the class size for Group Online classes?",
              answer:
                "Group classes are capped at 5 students to ensure personalised attention and meaningful interaction.",
            },
            {
              question: "What is your cancellation or rescheduling policy?",
              answer:
                "Please inform me at least 24 hours in advance for any rescheduling. Make-up classes will be arranged where possible.",
            },
            {
              question: "Do you provide notes or resources?",
              answer:
                "Yes! Students get access to a resource library on Google Drive and curated updates via Telegram, including notes, homework, and past-year solutions.",
            },
            {
              question: "Do you offer 1-on-1 tuition?",
              answer:
                "Yes, we offer personalised one-on-one classes both online and in-person for students who prefer tailored support. Students would still have access to the same Google Drive Repository.",
            },
            {
              question: "How do I sign up?",
              answer:
                "You can sign up using the form on our website. We’ll get in touch within three days. Slots are allocated on a first-come, first-served basis.",
            },
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.section>

      {/* Get in touch */}
      <motion.section
        className="py-32 px-6 md:px-32 text-center bg-gradient-to-b from-white via-blue-300 to-white"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 tracking-tight">
          Your Query,
          <br />
          <span className="block mt-5 text-blue-600">Our Priority.</span>
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-600 mt-10 font-light max-w-3xl mx-auto mt-10">
          In Person. Online. Your Call.
        </p>
        <div className="flex justify-center items-center gap-3 mb-4 mt-5">
          <a
            href="https://www.facebook.com/ezatuition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo/facebook.png`}
              alt="Chat on Facebook"
              className="w-6 h-6 mx-auto transition-all duration-200 hover:scale-110 hover:drop-shadow-md"
            />
          </a>
          <a
            href="https://www.instagram.com/ezatuition/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo/insta.png`}
              alt="Chat on Instagram"
              className="w-7 h-7 mx-auto transition-all duration-200 hover:scale-110 hover:drop-shadow-md"
            />
          </a>
          <a
            href="https://www.tiktok.com/@ezatuition?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo/tiktok.png`}
              alt="Chat on Tiktok"
              className="w-7 h-7 mx-auto transition-all duration-200 hover:scale-110 hover:drop-shadow-md"
            />
          </a>
        </div>

        <Form />

        {/* Sign Up Box ---------->            Keeping this here just in case sheets.best expires!
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6K8KNlTXAPtp4Ax-_x8AToHITSPi1KLBung75Xlx6NNeGug/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-10 mx-auto max-w-xs"
        >
          <div className="animated-gradient-bg text-white rounded-2xl px-6 py-4 text-center shadow-xl hover:bg-white hover:text-black transition-colors cursor-pointer">
            <span className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
              Get started. Stay ahead.
            </span>
          </div>
        </a>*/}
      </motion.section>

      <footer className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} EZATuition. All rights reserved. Singapore.
      </footer>
    </div>
  );
}
