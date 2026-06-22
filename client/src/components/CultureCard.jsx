import React from 'react';

const CultureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 text-center hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 mx-auto mb-4 bg-[#DFFF00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DFFF00]/20 transition-colors">
        <Icon size={28} className="text-[#DFFF00]" />
      </div>
      <h3 className="text-lg font-bold text-[#F5F5F5] font-['Bebas_Neue',sans-serif] tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-[#A3A3A3] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CultureCard;
