
// File: components/Benefits.tsx
interface Benefit {
    title: string;
    icon: string;
  }
  
  export default function Benefits() {
    const benefits: Benefit[] = [
      { title: 'Kostenfreie Vermittlung für Eigentümer', icon: '🤝' },
      { title: 'Bis zu 3 unverbindliche Angebote von Pächtern', icon: '📨' },
      { title: 'Bis zu 4.500€ je neue Pachteinnahme', icon: '💰' },
      { title: 'Diskrete Vermittlung Ihrer Pachtfläche', icon: '🔒' },
    ]
  
    return (
      <div className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Gute Gründe für den FlächenMakler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="font-semibold">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  