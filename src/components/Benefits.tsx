import React from 'react';
import { BadgeCheck, Brain, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Crecimiento Profesional",
    description: "Acelera tu carrera con certificaciones reconocidas en la industria"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Comunidad Global",
    description: "Únete a una red mundial de profesionales Salesforce"
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Conocimiento Experto",
    description: "Aprende con un plan de estudios completo y actualizado"
  },
  {
    icon: <BadgeCheck className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Validación",
    description: "Demuestra tu experiencia con credenciales verificadas"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">¿Por qué Certificarte?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}