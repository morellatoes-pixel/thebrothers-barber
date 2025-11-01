export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Es momento de renovar tu estilo
        </h2>
        <p className="text-xl text-white mb-4 leading-relaxed">
          Elige la experiencia, la precisión y la atmósfera única de The Brothers Barber Shop.
        </p>
        <p className="text-lg text-amber-100 mb-12 leading-relaxed">
          No dejes tu look al azar — reserva tu cita hoy y descubre por qué somos el barbershop de referencia en Valencia desde hace más de 13 años.
        </p>

        <button className="bg-white hover:bg-neutral-100 text-amber-700 font-bold text-xl px-16 py-6 rounded-lg transition-all transform hover:scale-105 shadow-2xl">
          Reserva tu cita ahora
        </button>
      </div>
    </section>
  );
}
