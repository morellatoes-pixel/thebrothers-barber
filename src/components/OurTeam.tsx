import { Scissors } from 'lucide-react';

export default function OurTeam() {
  const team = [
    {
      name: 'Carlos Rodríguez',
      title: 'Master Barber',
      description: 'Más de 15 años de experiencia. Especialista en cortes clásicos y afeitado tradicional.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Luis Martín',
      title: 'Fade & Style Expert',
      description: 'Apasionado de los looks modernos y las transiciones perfectas.',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Javier Torres',
      title: 'Beard Specialist',
      description: 'Experto en cuidado de barba y tratamientos personalizados según tu tipo de rostro.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conoce a nuestros barberos expertos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all hover:-translate-y-2 duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 rounded-full p-3">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-amber-500 font-semibold mb-4 text-lg">{member.title}</p>
                <p className="text-neutral-300 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
