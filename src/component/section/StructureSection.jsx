import AnimatedContent from "../animation/AnimatedContent";

// --- SUB-SECTION: STRUCTURE ---
const StructureSection = ({ members }) => (
  <section className="py-24 bg-transparent" id="structure">
    <div className="container mx-auto px-6 md:px-12 xl:px-20">
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={1.5}
        initialOpacity={0}
        animateOpacity
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-white uppercase tracking-widest">
            Estructura <span className="text-green-400">Turma E</span>
          </h2>
          <div className="h-1.5 w-24 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
          <p className="text-gray-500 text-[10px] mt-6 uppercase tracking-[0.5em] font-medium">
            Elementu Husi Klase: {members.length} Pessoas
          </p>
        </div>
      </AnimatedContent>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {members.map((member, index) => (
          <AnimatedContent
            key={index}
            distance={40}
            direction="vertical"
            delay={index * 0.04}
            duration={0.7}
          >
            <div className="group relative bg-slate-900/40 border border-white/5 p-4 rounded-2xl backdrop-blur-md hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4 border border-white/10 group-hover:border-green-400/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="text-center">
                <h3 className="text-[15px] md:text-base font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-500 text-[10px] font-mono uppercase tracking-tighter mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-[11px] md:text-xs font-light line-clamp-2 h-[34px] md:h-[40px]">
                  {member.description}
                </p>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

export default StructureSection;
