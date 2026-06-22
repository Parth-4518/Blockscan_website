const ProcessStep = ({ step, title, description, isLast }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#2BF0FF] text-[#050816] rounded-full flex items-center justify-center font-bold text-lg font-['Space_Grotesk',sans-serif]">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-[#2BF0FF]/30 mt-2" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-bold text-[#FFFFFF] font-['Space_Grotesk',sans-serif] tracking-wide mb-1">
          {title}
        </h3>
        <p className="text-[#B6C2D9] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;