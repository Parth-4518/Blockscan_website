import { MapPin, Briefcase, Clock } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#F5F5F5] font-['Bebas_Neue',sans-serif] tracking-wide group-hover:text-[#DFFF00] transition-colors">
            {job.title}
          </h3>
          <span className="inline-block mt-2 px-3 py-1 bg-[#DFFF00]/15 text-[#DFFF00] rounded-full text-xs font-semibold uppercase tracking-wider">
            {job.department}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-[#DFFF00]" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase size={14} className="text-[#DFFF00]" />
          <span>{job.experience}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-[#DFFF00]" />
          <span>{job.type}</span>
        </div>
      </div>

      <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6">
        {job.description}
      </p>

      <button className="w-full py-3 px-4 bg-[#DFFF00] text-[#0A0A0A] rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#DFFF00]/90 transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
