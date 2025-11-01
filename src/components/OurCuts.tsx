import { Clock } from 'lucide-react';

export default function OurCuts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Cortes hechos a tu medida
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            En The Brothers creemos que cada persona merece un estilo propio. Nuestros barberos realizan cortes precisos, modernos y totalmente personalizados con productos de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img
              src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Corte de cabello profesional 1"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">Corte Clásico</h3>
              <p className="text-sm text-neutral-200">Estilo atemporal y elegante</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img
              src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Corte de cabello profesional 2"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">Fade Moderno</h3>
              <p className="text-sm text-neutral-200">Transiciones perfectas</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img
              src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Corte de cabello profesional 3"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">Estilo Personalizado</h3>
              <p className="text-sm text-neutral-200">Tu look único</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Tiempos de servicio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 flex items-center space-x-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-amber-600 rounded-full p-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Corte básico</h4>
                <p className="text-2xl font-bold text-amber-600">20 minutos</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 flex items-center space-x-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-amber-600 rounded-full p-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Corte elaborado</h4>
                <p className="text-2xl font-bold text-amber-600">35 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
