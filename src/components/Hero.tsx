import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Impulsa tu Carrera con Certificaciones Salesforce
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Únete a millones de Trailblazers que están transformando sus carreras a través de certificaciones Salesforce
          </p>
          <button className="bg-white text-blue-600 dark:bg-blue-950 dark:text-blue-100 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
            Explorar Certificaciones
          </button>
        </div>
      </div>
    </section>
  );
}