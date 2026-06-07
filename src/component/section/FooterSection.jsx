import AnimatedContent from "../animation/AnimatedContent";
// --- SUB-SECTION: FOOTER ---
const FooterSection = () => (
  <footer className="relative mt-32 pb-12 px-6">
    <AnimatedContent distance={50} direction="vertical" duration={1.5}>
      <div className="container mx-auto">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-12 shadow-[0_0_15px_rgba(74,222,128,0.3)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* iha karuk: Branding */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              TURMA<span className="text-green-400"> E</span>
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-[0.4em] mt-2 font-bold">
              IT ENGENERING
            </p>
            <div className="flex items-center gap-3 mt-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
                Hamutuk ita Bele
              </span>
            </div>
          </div>

          {/* iha klaran: Quote */}
          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20">
              <span className="text-green-400 text-xl">🚀</span>
            </div>
            <p className="text-white text-lg md:text-xl font-medium italic text-center leading-relaxed">
              "Lao hamutuk, <br />
              <span className="text-green-400 not-italic font-black uppercase">
                Susesu hamutuk
              </span>
              "
            </p>
          </div>

          {/*iha los: LOKASI/KAMPUS */}
          <div className="flex flex-col items-center md:items-end order-3">
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-4">
              Lokasi Kampus
            </p>

            <div className="flex flex-col items-center md:items-end gap-1 mb-6">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-green-400">📍</span> IOB CAMPUS-C
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                Fomentu II, Dom Alexu, Dili Timoe-Leste
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                © 2026 Developed By
              </p>
              <p className="text-white text-sm font-black mt-1">
                SIDÓNIO VACU CRISTÓVÃO
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[1em] ml-[1em]">
            IOB-DILI • FAMILIA E
          </p>
        </div>
      </div>
    </AnimatedContent>
  </footer>
);

export default FooterSection;
