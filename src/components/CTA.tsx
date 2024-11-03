import React from 'react';

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar tu Viaje?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Da el primer paso para convertirte en un profesional certificado de Salesforce hoy
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Comienza Ahora
        </button>
      </div>
    </section>
  );
}