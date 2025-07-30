'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '',
    description: 'Perfect for smaller hospitals and clinics.',
    features: [
      'Up to 100 discharges per month',
      'AI risk assessment',
      'Basic patient education library',
      'Email & phone support',
      'Basic analytics dashboard',
      'Standard EHR integration',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: ',499',
    description: 'Ideal for mid-sized healthcare facilities.',
    features: [
      'Up to 500 discharges per month',
      'Advanced AI risk modeling',
      'Custom patient education content',
      'Priority 24/7 support',
      'Advanced analytics & reporting',
      'Premium EHR integration',
      'Care network coordination',
      'Custom workflow automation',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Custom',
    description: 'For large health systems with complex needs.',
    features: [
      'Unlimited discharges',
      'Custom AI model training',
      'Full content customization',
      'Dedicated support team',
      'Enterprise analytics suite',
      'Multiple EHR integration',
      'Full API access',
      'Custom development',
    ],
    featured: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your facility
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Simple, transparent pricing that scales with your needs. All plans include implementation support and training.
        </p>
        <div
          ref={ref}
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              className={classNames(
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: tierIdx * 0.2 }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-blue-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                Get started today
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
