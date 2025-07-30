'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          ref={ref}
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your discharge process?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join leading healthcare providers in delivering safer, more efficient patient care.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#demo"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See It In Action
            </a>
            <a href="#pricing" className="text-sm font-semibold leading-6 text-white">
              View Pricing <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
