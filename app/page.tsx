'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, X, Users, Shield } from 'lucide-react'

export default function Page() {
  const [hiddenTestimonials, setHiddenTestimonials] = useState<Set<string>>(new Set())

  const testimonials = [
    {
      id: 'sarah',
      name: 'Sarah M.',
      location: 'New York, USA',
      avatar: 'S',
      text: 'Just completed all 5 deals! Got my $500 Rhode gift card instantly 🎉',
      rating: 5,
    },
    {
      id: 'james',
      name: 'James T.',
      location: 'London, UK',
      avatar: 'J',
      text: 'Easiest money ever. Completed the offers and received my reward.',
      rating: 5,
    },
    {
      id: 'emma',
      name: 'Emma R.',
      location: 'Sydney, Australia',
      avatar: 'E',
      text: 'Finished all 4 deals in 15 min. Rhode gift card is already in my account!',
      rating: 5,
    },
    {
      id: 'michael',
      name: 'Michael P.',
      location: 'Los Angeles, USA',
      avatar: 'M',
      text: 'Very legitimate programme. Already completed and got rewarded!',
      rating: 5,
    },
    {
      id: 'lisa',
      name: 'Lisa D.',
      location: 'Melbourne, Australia',
      avatar: 'L',
      text: 'Completed 5 offers, received my $500 gift card. Highly recommend!',
      rating: 5,
    },
    {
      id: 'david',
      name: 'David K.',
      location: 'Manchester, UK',
      avatar: 'D',
      text: 'Fast payout. Did the offers on Tuesday, had my card Wednesday.',
      rating: 5,
    },
  ]

  const steps = [
    {
      icon: '🎯',
      title: 'Click the button below',
      description: 'Start your claim process',
    },
    {
      icon: '👤',
      title: 'Verify your info',
      description: 'Quick & secure verification',
    },
    {
      icon: '✓',
      title: 'Complete deals',
      description: 'Must complete minimum 3 offers to qualify',
    },
    {
      icon: '🎁',
      title: 'Get your gift card!',
      description: 'Delivered to your inbox',
    },
  ]

  const handleCloseTestimonial = (id: string) => {
    const newHidden = new Set(hiddenTestimonials)
    newHidden.add(id)
    setHiddenTestimonials(newHidden)
  }

  const visibleTestimonials = testimonials.filter((t) => !hiddenTestimonials.has(t.id))

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="mb-12">
          <Image
            src="/rhode-logo.png"
            alt="Rhode Skin"
            width={160}
            height={60}
            className="mx-auto mb-8"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-2 text-slate-900">
          Claim Your Free
        </h1>
        <div className="text-6xl md:text-7xl font-bold text-rose-600 mb-4">
          $500
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          Rhode Gift Card
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Limited-time offer — complete a quick verification to receive your gift card by email.
        </p>

        {/* CTA Button */}
        <a
          href="https://giftclick.org/aff_c?offer_id=3478&aff_id=171988"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-12 rounded-full text-lg mb-6 transition-colors shadow-lg"
        >
          CLAIM MY GIFT CARD →
        </a>

        <p className="text-gray-500 text-sm">
          No credit card required
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-rose-50">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">How It Works</h3>

          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 flex items-start gap-6"
              >
                <div className="text-4xl flex-shrink-0 mt-1">{step.icon}</div>
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    <span className="text-rose-600">Step {index + 1}.</span> {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-rose-500" fill="currentColor" />
              <span className="text-gray-700 font-semibold">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-semibold">12K+ Claims</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-semibold">SSL Secured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Real Reviewers, Real Rewards
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Join thousands who have completed their offers and claimed their gift cards
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border-l-4 border-rose-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                <button
                  onClick={() => handleCloseTestimonial(testimonial.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-500" fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Completion Stat */}
          <div className="text-center">
            <p className="text-gray-600 text-base font-semibold">
              ✓ 6 people completed offers today
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-rose-50 to-white text-center">
        <h3 className="text-3xl font-bold mb-6 text-slate-900">
          Don&apos;t miss out on your $500 Rhode gift card
        </h3>
        <a
          href="https://giftclick.org/aff_c?offer_id=3478&aff_id=171988"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-12 rounded-full text-lg mb-4 transition-colors shadow-lg"
        >
          CLAIM NOW →
        </a>
        <p className="text-gray-500 text-sm">
          Limited time offer • No credit card required
        </p>
      </section>
    </main>
  )
}
