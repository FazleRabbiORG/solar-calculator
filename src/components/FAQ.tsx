
// File: components/FAQ.tsx
'use client'

import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    { question: 'Wie viel ist Ihre Fläche wert?', answer: 'Der Wert Ihrer Fläche hängt von verschiedenen Faktoren ab...' },
    { question: 'Wie funktioniert der Pachtpreis-Rechner?', answer: 'Unser Pachtpreis-Rechner verwendet aktuelle Marktdaten...' },
    { question: 'Was geschieht nach dem Ausfüllen des Pachtpreis-Rechners?', answer: 'Nach dem Ausfüllen erhalten Sie eine detaillierte Schätzung...' },
    { question: 'Was ist der Unterschied zwischen Pachtpreis und Pachtzins?', answer: 'Der Pachtpreis bezieht sich auf den Gesamtbetrag, während der Pachtzins...' },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Häufig gestellte Fragen (FAQs)</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <button
                className="w-full text-left font-semibold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </button>
              {openIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
