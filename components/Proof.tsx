'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { id: 1, name: 'Reduction in Readmissions', value: '32%' },
  { id: 2, name: 'Patient Satisfaction', value: '94%' },
  { id: 3, name: 'Time Saved Per Discharge', value: '45min' },
  { id: 4, name: 'ROI in First Year', value: '3.2x' },
]

const testimonials = [
  {
    body: "DischargeMate has transformed our discharge process. We've seen a significant drop in readmissions and our staff can focus more on patient care rather than paperwork.",
    author: {
      name: 'Dr. Sarah Chen',
      role: 'Chief of Medicine, Metropolitan Hospital',
      image: '/images/testimonial-1.jpg',
    },
  },
  {
    body: "The AI-powered risk detection has caught several high-risk cases that might have been missed. It's like having an extra set of experienced eyes on every discharge.",
    author: {
      name: 'James Wilson',
      role: 'Director of Nursing, Central Health',
      image: '/images/testimonial-2.jpg',
    },
  },
]

export default function Proof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Leading Healthcare Providers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how healthcare systems are transforming patient care with DischargeMate
          </p>
        </div>
        <motion.div
          ref={ref}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col-reverse gap-y-4">
              <div className="text-base leading-7 text-gray-600">{stat.name}</div>
              <div className="text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</div>
            </div>
          ))}
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              className="rounded-2xl bg-gray-50 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <blockquote className="text-gray-900">
                <p>"{testimonial.body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.image} alt="" />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  )
}
