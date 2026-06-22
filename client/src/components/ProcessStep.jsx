import React from 'react';

const ProcessStep = ({ step, title, description, isLast }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#DFFF00] text-[#0A0A0A] rounded-full flex items-center justify-center font-bold text-lg font-['Bebas_Neue',sans-serif]">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-[#DFFF00]/30 mt-2" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-bold text-[#F5F5F5] font-['Bebas_Neue',sans-serif] tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-[#A3A3A3] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;