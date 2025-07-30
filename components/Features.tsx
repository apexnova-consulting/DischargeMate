'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Risk Detection',
    description: 'Sleep better knowing our AI catches high-risk cases before they become readmissions. Reduce your workload while improving patient safety.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Smart Patient Education',
    description: 'Automatically generate personalized education materials that patients actually understand and remember, improving compliance and outcomes.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Seamless EHR Integration',
    description: 'No more double data entry. DischargeMate works within your existing EHR system, saving time and reducing errors.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Automated Follow-up',
    description: 'Set up intelligent follow-up workflows once, then let DischargeMate handle the rest. Never miss a critical touchpoint again.',
    icon: BoltIcon,
  },
  {
    name: 'Real-time Analytics',
    description: 'Track your success with easy-to-understand dashboards. Spot trends, measure improvements, and demonstrate ROI effortlessly.',
    icon: ScaleIcon,
  },
  {
    name: 'Care Network Coordination',
    description: 'Seamlessly coordinate with primary care, specialists, and home health providers. Keep everyone in sync without the phone tag.',
    icon: GlobeAltIcon,
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Everything You Need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful Features, Simple Implementation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Every feature is designed to make your life easier and your patients safer
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, featureIdx) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: featureIdx * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
