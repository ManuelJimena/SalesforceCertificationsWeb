import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CertificationCard from './components/CertificationCard';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import { ThemeProvider } from './context/ThemeContext';

const certifications = [
  {
    title: "Administrador Salesforce",
    level: "Principiante",
    duration: "6-8 semanas",
    price: "200€",
    skills: ["Gestión de Usuarios", "Seguridad", "Gestión de Datos", "Analíticas"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
  },
  {
    title: "Desarrollador Platform I",
    level: "Intermedio",
    duration: "8-12 semanas",
    price: "200€",
    skills: ["Apex", "Visualforce", "Componentes Lightning", "Integración"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  },
  {
    title: "Consultor Sales Cloud",
    level: "Avanzado",
    duration: "10-14 semanas",
    price: "200€",
    skills: ["Proceso de Ventas", "Configuración", "Integración", "Analíticas"],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  }
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Hero />
        
        {/* Certifications Section */}
        <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Certificaciones Populares</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </div>
          </div>
        </section>

        <Benefits />
        <CTA />
      </div>
    </ThemeProvider>
  );
}

export default App;