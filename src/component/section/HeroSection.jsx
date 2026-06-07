import AnimatedContent from "../animation/AnimatedContent";
import TiltedCard from "../animation/TiltedCard";
import BlurText from "../textAnimation/BlurText";
import TextType from "../textAnimation/TextType";


// --- SUB-SECTION: HERO ---
const HeroSection = () => (
  <section
    id="home"
    className="relative flex flex-col md:flex-row items-center justify-center gap-12 min-h-screen px-6 text-white overflow-hidden"
  >
    <div className="absolute top-1/4 -left-10 w-64 h-64 bg-green-500/10 blur-[120px] rounded-full"></div>

    <div className="w-full md:w-1/2 flex flex-col gap-6 z-10">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-xs font-medium tracking-widest uppercase text-gray-300">
              Hamutuk Ita Bele
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg md:text-xl font-medium text-green-400">
              Ola 🙋‍♂️, Ami mak...
            </h1>
            <TextType
              text={[
                "Familia Bo'ot Turma E",
                "Web Development",
                "Industrial Software Engineer",
                "Cybersecurity Analyst",
              ]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              className="font-poppins text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-white to-green-400 bg-clip-text text-transparent"
            />
          </div>

          <div className="max-w-lg">
            <BlurText
              text="Habelun amizade ho ambisaun. Fatin ba hanoin ne'ebé oioin, vizaun ne'ebé hanesan, no istória ne'ebé labele haluha."
              delay={100}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg font-poppins text-gray-400 leading-relaxed"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#image" className="group relative">
              <div className="absolute -inset-0.5 bg-green-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <button className="relative bg-green-500 hover:bg-green-600 text-black font-bold font-poppins text-sm px-8 py-3 rounded-lg transition-all duration-300 shadow-xl">
                Hare Image
              </button>
            </a>
            <a href="#about">
              <button className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold font-poppins text-sm px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm">
                Kona Ba
              </button>
            </a>
          </div>
        </div>
      </AnimatedContent>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center relative">
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={2}
        delay={0.4}
        initialOpacity={0}
        animateOpacity
        scale={0.8}
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-400/20 blur-[50px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="relative drop-shadow-[0_0_35px_rgba(74,222,128,0.4)] transition-transform duration-500 group-hover:scale-105">
            <TiltedCard
              imageSrc="/img/famili.jpeg"
              altText="Familia Boot E"
              captionText="Familia Boot - E"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="450px"
              rotateAmplitude={15}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </div>
        </div>
      </AnimatedContent>
    </div>
  </section>
);

export default HeroSection;