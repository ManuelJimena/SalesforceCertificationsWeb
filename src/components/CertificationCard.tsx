import React from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';

interface CertificationProps {
  title: string;
  level: string;
  duration: string;
  price: string;
  skills: string[];
  image: string;
}

export default function CertificationCard({ title, level, duration, price, skills, image }: CertificationProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{level}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{duration}</span>
          </div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">{price}</div>
        </div>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}