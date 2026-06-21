const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#111827] border border-white/5 rounded-xl p-6 hover:border-[rgba(43,240,255,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 mb-4 bg-[#2BF0FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2BF0FF]/20 transition-colors">
        <Icon size={24} className="text-[#2BF0FF]" />
      </div>
      <h3 className="text-lg font-bold text-[#FFFFFF] font-['Space_Grotesk',sans-serif] tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-[#B6C2D9] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;