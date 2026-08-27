

import { useRef, useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import { SectionIcon } from './SectionIcon';
import { Container } from './Container';
import { motion } from 'motion/react';
import {
  MessageSquare,
  User,
  Mail,
  Phone,
  PenLine,
  Send,
  ShieldCheck,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";

interface FAQProps {
  hideForm?: boolean;
  customFaqs?: { question: string; answer: string }[];
}

export default function FAQ({ hideForm = false, customFaqs }: FAQProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const defaultFaqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  const faqs = customFaqs || defaultFaqs;

  // Store each accordion content element
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  const renderAccordionItem = (faq: typeof faqs[0], idx: number) => {
    const isActive = activeIndex === idx;

    return (
      <div
        key={idx}
        className={`
          border rounded-[16px] overflow-hidden
          transition-all duration-300 ease-out
          ${
            isActive
              ? "border-[#ff6800] border-l-[3px] bg-orange-50/30 shadow-[0_8px_25px_rgba(255,104,0,0.06)]"
              : "border-gray-100 bg-white hover:border-gray-200"
          }
        `}
      >
        {/* Question Button */}
        <button
          type="button"
          onClick={() => toggleFAQ(idx)}
          aria-expanded={isActive}
          style={{ WebkitTapHighlightColor: "transparent" }}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <div className="flex items-center gap-4 min-w-0">
            {/* Plus / Minus */}
            <div
              className={`
                w-6 h-6 rounded-full
                flex items-center justify-center
                flex-shrink-0
                outline-none ring-0 border-0
                transition-all duration-300 ease-out
                ${isActive ? "bg-[#ff6800] scale-100" : "bg-transparent scale-100"}
              `}
            >
              {isActive ? (
                <Minus className="w-3.5 h-3.5 text-white" strokeWidth={4} />
              ) : (
                <Plus className="w-3.5 h-3.5 text-[#ff6800]" strokeWidth={4} />
              )}
            </div>

            {/* Question */}
            <span
              className={`
                font-bold text-[15px] sm:text-[16px]
                transition-colors duration-300
                ${isActive ? "text-[#ff6800]" : "text-neutral-800"}
              `}
            >
              {faq.question}
            </span>
          </div>

          {/* Chevron */}
          <ChevronDown
            className={`
              w-5 h-5 text-[#ff6800] flex-shrink-0 ml-2
              transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${isActive ? "rotate-180" : "rotate-0"}
            `}
          />
        </button>

        {/* ANSWER — REAL DYNAMIC HEIGHT ANIMATION */}
        <div
          ref={(element) => {
            contentRefs.current[idx] = element;
          }}
          className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            maxHeight: isActive
              ? `${contentRefs.current[idx]?.scrollHeight ?? 0}px`
              : "0px",
            opacity: isActive ? 1 : 0,
          }}
        >
          <div
            className={`
              pl-[56px] pr-5
              transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isActive ? "translate-y-0" : "-translate-y-2"}
            `}
          >
            <p className="pb-5 text-neutral-600 text-[14px] sm:text-[15px] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-24 bg-[#fafafa] relative overflow-hidden z-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6800] opacity-[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff6800] opacity-[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Dotted Grid Left */}
      <div
        className="absolute top-20 -left-10 w-64 h-64 opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ff6800 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      {/* Dotted Grid Right */}
      <div
        className="absolute top-40 right-0 w-64 h-64 opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ff6800 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      <Container className="relative z-20">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <SectionIcon className="w-6 h-6" />
            <p className="text-brand-gradient font-bold tracking-wider uppercase text-sm">{t('faq.tag')}</p>
          </div>

          <h2 className="text-[36px] sm:text-[42px] font-bold text-neutral-900 leading-tight mb-6">
            {t('faq.title1')} <span className="text-brand-gradient">{t('faq.title2')}</span>
          </h2>

          <p className="text-neutral-500 text-[17px] leading-relaxed max-w-2xl mx-auto">
            {t('faq.desc')}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className={`grid ${hideForm ? 'lg:grid-cols-2 gap-6 sm:gap-8' : 'lg:grid-cols-[1fr_1.2fr] gap-8'} items-start max-w-6xl mx-auto`}>
          
          {/* Left Column */}
          {!hideForm ? (
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-[#ff6800]">
                  <MessageSquare className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1.5">
                    {t('faq.contact.title')}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {t('faq.contact.desc')}
                  </p>
                </div>
              </div>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="text" placeholder={t('faq.form.name')} className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]" />
                    <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <input type="email" placeholder={t('faq.form.email')} className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]" />
                    <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="relative">
                  <input type="tel" placeholder={t('faq.form.phone')} className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]" />
                  <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative">
                  <textarea placeholder={t('faq.form.message')} className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px] h-32 resize-none" />
                  <PenLine className="absolute right-3.5 bottom-4 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <button type="submit" className="w-full mt-2 bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,104,0,0.6)] transition-all text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-[15px]">
                  <Send className="w-4 h-4" />
                  {t('faq.form.send')}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-neutral-500">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[13px]">
                  {t('faq.form.privacy')}
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, relativeIdx) => renderAccordionItem(faq, relativeIdx))}
            </motion.div>
          )}

          {/* Right Column: Smooth Accordion */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="bg-white rounded-[24px] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4">
            {(hideForm ? faqs.slice(Math.ceil(faqs.length / 2)) : faqs).map((faq, relativeIdx) => {
              const idx = hideForm ? relativeIdx + Math.ceil(faqs.length / 2) : relativeIdx;
              return renderAccordionItem(faq, idx);
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
