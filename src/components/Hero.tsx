import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import AppointmentCalendar from './AppointmentCalendar';

export default function Hero() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Brothers Barber Shop
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-200 mb-4 font-light">
          Tradición y estilo en la playa de Valencia
        </p>
        <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto">
          Más de 8 años ofreciendo cortes de precisión y looks personalizados para cada cliente.
        </p>

        <button 
          onClick={openCalendar}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all transform hover:scale-105 shadow-2xl mb-16"
        >
          Reserva tu cita ahora
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex items-start space-x-4 text-left hover:bg-opacity-20 transition-all">
            <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Ubicación</p>
              <p className="text-neutral-300 text-sm">Carrer Mari Blas de Lezo 24, Valencia 46011</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex items-start space-x-4 text-left hover:bg-opacity-20 transition-all">
            <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Teléfono</p>
              <p className="text-neutral-300 text-sm">+34 678111000</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex items-start space-x-4 text-left hover:bg-opacity-20 transition-all">
            <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Email</p>
              <p className="text-neutral-300 text-sm">info@thebrothers.es</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex items-start space-x-4 text-left hover:bg-opacity-20 transition-all">
            <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white font-semibold mb-1">Horario</p>
              <p className="text-neutral-300 text-sm">Lunes a viernes: 09:00-14:00 y 14.30-20:00 </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendario de citas */}
      <AppointmentCalendar isOpen={isCalendarOpen} onClose={closeCalendar} />
    </section>
  );
}
