import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MapPinned } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-500">The Brothers</h3>
            <p className="text-neutral-400 text-sm">Barber Shop</p>
            <p className="text-neutral-400 text-sm mt-2">Tradición y estilo desde 2012</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">+34 678111000</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">info@thebrothers.es</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Ubicación</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">Carrer Mari Blas de Lezo 24<br/>Valencia 46011</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">Lunes a viernes<br/>09:00 – 18:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-neutral-800 hover:bg-amber-600 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-amber-600 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-amber-600 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPinned className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; 2025 The Brothers Barber Shop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
