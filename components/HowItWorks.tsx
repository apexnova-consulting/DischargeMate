'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const steps = [
  {
    name: 'Quick Integration',
    description: 'Connect DischargeMate to your EHR in minutes, not months. Our platform works alongside your existing systems with zero workflow disruption.',
  },
  {
    name: 'Smart Risk Detection',
    description: 'Our AI analyzes patient data in real-time, automatically flagging high-risk cases and suggesting personalized interventions.',
  },
  {
    name: 'Automated Follow-up',
    description: 'Set it and forget it. DischargeMate handles patient education, appointment scheduling, and follow-up communication automatically.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple. Powerful. Effective.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started in three easy steps and transform your discharge process
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, stepIdx) => (
              <motion.div
                key={step.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: stepIdx * 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
