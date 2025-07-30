'use client';

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Protect Your Patients Beyond Hospital Walls
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The intelligent discharge platform that reduces readmissions, improves outcomes, and integrates seamlessly with your existing workflow.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#demo"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                See It In Action
              </a>
              <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">
                View Pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <motion.img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/images/hero-image.jpg"
            alt="Healthcare professional using DischargeMate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  )
}
