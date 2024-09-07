
// File: components/HowItWorks.tsx
interface Step {
    title: string;
    description: string;
  }
  
  export default function HowItWorks() {
    const steps: Step[] = [
      { title: 'Pachtpreis berechnen', description: 'Sie erhalten eine Pachtpreis­schätzung ihrer Fläche per E-Mail.' },
      { title: 'Expertenberatung', description: 'Unsere Pachtexperten beraten Sie zu möglichen Optionen.' },
      { title: 'Vermittlung', description: 'Innerhalb von 3 Wochen erhalten Sie das erste Angebot.' },
    ]
  
    return (
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">So funktioniert's!</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  