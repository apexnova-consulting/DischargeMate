'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How long does it take to implement DischargeMate?",
    answer: "Most facilities are up and running within 2-4 weeks. Our implementation team handles the entire process, including EHR integration, staff training, and workflow customization. We work around your schedule to ensure minimal disruption to your operations.",
  },
  {
    question: "Is DischargeMate HIPAA compliant?",
    answer: "Yes, DischargeMate is fully HIPAA compliant and SOC 2 Type II certified. We employ enterprise-grade encryption, regular security audits, and strict access controls to protect patient data. Our platform is built with privacy and security as top priorities.",
  },
  {
    question: "Which EHR systems does DischargeMate integrate with?",
    answer: "DischargeMate integrates with all major EHR systems including Epic, Cerner, MEDITECH, and Allscripts. We use standard HL7 and FHIR protocols, making integration seamless and secure. Custom integrations are available for unique needs.",
  },
  {
    question: "How does the AI risk assessment work?",
    answer: "Our AI analyzes over 100 clinical and social factors from your EHR data to predict readmission risk. The model is continuously trained on the latest medical research and your facility's specific patient population, improving accuracy over time.",
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Most facilities see ROI within 6-12 months through reduced readmissions, improved efficiency, and better quality scores. Our clients typically report 25-35% reduction in preventable readmissions and 40-50% time savings in discharge processes.",
  },
  {
    question: "Do you offer custom content and workflows?",
    answer: "Yes, all Professional and Enterprise plans include customization options. You can modify patient education materials, risk assessment criteria, follow-up protocols, and automation workflows to match your facility's specific needs and protocols.",
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl
            ref={ref}
            className="mt-10 space-y-6 divide-y divide-gray-900/10"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
