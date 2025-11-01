import { useState, useEffect } from 'react';

interface AppointmentCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AvailableDate {
  date: string;
  slots: string[];
}

export default function AppointmentCalendar({ isOpen, onClose }: AppointmentCalendarProps) {
  const [isOwner, setIsOwner] = useState(false);
  const [password, setPassword] = useState('');
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Simula il caricamento delle date disponibili
  useEffect(() => {
    // In un'applicazione reale, queste date verrebbero caricate da un database
    const mockDates: AvailableDate[] = [
      {
        date: '2025-01-15',
        slots: ['10:00', '11:00', '12:00', '16:00', '17:00']
      },
      {
        date: '2025-01-16',
        slots: ['09:00', '10:00', '11:00', '15:00', '16:00']
      },
      {
        date: '2025-01-17',
        slots: ['14:00', '15:00', '16:00', '17:00', '18:00']
      }
    ];
    
    setAvailableDates(mockDates);
  }, []);

  const handleOwnerLogin = () => {
    // In un'applicazione reale, questa verifica avverrebbe sul server
    // Questa è solo una simulazione per scopi dimostrativi
    if (password === 'proprietario123') {
      setIsOwner(true);
    } else {
      alert('Password non corretta');
    }
  };

  const handleAddDate = () => {
    // Funzionalità che sarebbe implementata per aggiungere nuove date
    if (isOwner) {
      alert('Funzionalità di aggiunta date disponibile solo nell\'implementazione completa');
    }
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedSlot && customerName && customerPhone) {
      alert(`Appuntamento prenotato per ${selectedDate} alle ${selectedSlot}`);
      onClose();
    } else {
      alert('Per favore compila tutti i campi');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900">Calendario Appuntamenti</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-800"
          >
            ✕
          </button>
        </div>

        {!isOwner ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Sei il proprietario?</h3>
            <div className="flex space-x-2">
              <input
                type="password"
                placeholder="Inserisci la password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 border border-neutral-300 rounded-lg px-4 py-2"
              />
              <button
                onClick={handleOwnerLogin}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-lg"
              >
                Accedi
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Gestione Date</h3>
              <button
                onClick={handleAddDate}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
              >
                Aggiungi Data
              </button>
            </div>
            <p className="text-neutral-600 italic">
              Come proprietario, puoi aggiungere e modificare le date disponibili per gli appuntamenti.
            </p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Date Disponibili</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {availableDates.map((dateObj) => (
              <button
                key={dateObj.date}
                onClick={() => setSelectedDate(dateObj.date)}
                className={`p-4 border rounded-lg text-center ${
                  selectedDate === dateObj.date
                    ? 'border-amber-600 bg-amber-50'
                    : 'border-neutral-300 hover:border-amber-300'
                }`}
              >
                {new Date(dateObj.date).toLocaleDateString('it-IT', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'long'
                })}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Orari Disponibili</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {availableDates
                .find((d) => d.date === selectedDate)
                ?.slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 border rounded-lg text-center ${
                      selectedSlot === slot
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-neutral-300 hover:border-amber-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
            </div>
          </div>
        )}

        {selectedDate && selectedSlot && !isOwner && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">I tuoi dati</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-700 mb-1">Nome e Cognome</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-2"
                  placeholder="Inserisci il tuo nome e cognome"
                />
              </div>
              <div>
                <label className="block text-neutral-700 mb-1">Telefono</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-2"
                  placeholder="Inserisci il tuo numero di telefono"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-100"
          >
            Annulla
          </button>
          {selectedDate && selectedSlot && !isOwner && (
            <button
              onClick={handleBookAppointment}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-lg"
            >
              Prenota
            </button>
          )}
        </div>
      </div>
    </div>
  );
}