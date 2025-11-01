import React from "react";

interface AppointmentCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentCalendar({ isOpen, onClose }: AppointmentCalendarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-neutral-900">
          Prenota il tuo appuntamento
        </h2>

        <iframe
          src="https://calendly.com/morellato-es/30min"
          style={{
            width: "100%",
            height: "700px",
            border: "none",
            borderRadius: "12px",
          }}
        ></iframe>
      </div>
    </div>
  );
}
