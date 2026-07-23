'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do I need a credit card?',
      answer: 'No credit card required. It&apos;s completely free to participate.',
    },
    {
      question: 'What countries does this work in?',
      answer: 'Only works in US, UK, CAN, AUS.',
    },
  ]

  return (
    <main className="bg-amber-50 min-h-screen">
      {/* Top Notification Bar */}
      <div className="bg-amber-800 text-white text-center py-3 px-6">
        <p className="text-sm font-bold">1,799 people claimed it</p>
      </div>

      {/* Main Card Container */}
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-3xl px-6 py-12 text-center mb-6">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-amber-700">RHODE</h3>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Get your <span className="text-amber-700">$500</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhode Giftcard</h2>

          {/* Subheading */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Complete the steps below to unlock your reward
          </p>
        </div>

        {/* Quick Start Guide Card */}
        <div className="bg-white rounded-3xl px-6 py-8 mb-6">
          <h3 className="text-amber-700 font-bold text-lg mb-6">QUICK START GUIDE</h3>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold text-sm">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm">Enter a valid email</p>
                <p className="text-gray-600 text-xs mt-1">For confirmation and updates</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold text-sm">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm">Complete 4–5 deals</p>
                <p className="text-gray-600 text-xs mt-1">More deals, more rewards</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold text-sm">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm">Must be 18 years or older</p>
                <p className="text-gray-600 text-xs mt-1">Required to participate</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://trksy.org/aff_c?offer_id=3478&aff_id=171988"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-6 rounded-full text-center mt-8 transition-colors"
          >
            CLAIM NOW
          </a>

          <p className="text-gray-600 text-xs text-center mt-4 leading-relaxed">
            By clicking "Claim Now", you agree to complete the required steps to receive your coupon.
          </p>
        </div>

        {/* Common Questions Card */}
        <div className="bg-white rounded-3xl px-6 py-8 mb-6">
          <h3 className="text-amber-700 font-bold text-lg mb-6">COMMON QUESTIONS</h3>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <p className="font-bold text-gray-900 text-sm">{faq.question}</p>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
                {index < faqs.length - 1 && (
                  <div className="border-t border-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-xs">
            SSL Secured • Encrypted • Verified • 100% Safe
          </p>
          <p className="text-gray-500 text-xs mt-2">© 2026</p>
        </div>
      </div>
    </main>
  )
}
