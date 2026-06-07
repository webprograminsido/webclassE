import AnimatedContent from "../animation/AnimatedContent";
import Stack from "../animation/Stack";
import BlurText from "../textAnimation/BlurText";

// --- SUB-SECTION: ABOUT ---
const AboutSection = ({ images }) => (
    <section id="about" className="py-20">
        <div className="container w-full h-full drop-shadow-[0_0_25px_rgba(74,222,128,0.3)] border border-green-500/30 rounded-2xl mx-auto p-10 md:p-20 bg-black/20 backdrop-blur-sm">
            <AnimatedContent
                distance={100}
                direction="vertical"
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.95}
                threshold={0.1}
            >
                <div className="flex flex-col justify-center items-center gap-12 md:flex-row md:gap-20">
                    <div
                        className="flex-shrink-0 z-10"
                        style={{ width: "min(100%, 450px)", height: 400 }}
                    >
                        <Stack
                            randomRotation
                            sensitivity={250}
                            sendToBackOnClick
                            cards={images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`card-${i + 1}`}
                                    className="rounded-2xl shadow-2xl border-2 border-green-400/20"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ))}
                            autoplay
                            autoplayDelay={4000}
                            pauseOnHover
                        />
                    </div>
                    <div className="max-w-xl text-center md:text-left">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-green-400 uppercase border border-green-400/50 rounded-full">
                            About Our Family
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                            Kona Ba <span className="text-green-400">Turma E</span>
                        </h1>
                        <BlurText
                            text={`Iha mundu dijitál ne'ebé luan, nu'udar estudante ne'ebé iha mehi atu sai enjeñeiru, eziste fatin úniku ida ne'ebé ami hanaran Turma E.`}
                            delay={30}
                            animateBy="words"
                            direction="top"
                            className="text-base md:text-lg font-poppins text-gray-300 leading-relaxed"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { val: "33+", lab: "Members" },
                                { val: "2024", lab: "Tinan Komesa" },
                                { val: "∞", lab: "Familias" },
                                { val: "Dili", lab: "Location" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-green-400/50 transition-colors group"
                                >
                                    <h3 className="text-green-400 font-bold text-2xl group-hover:scale-110 transition-transform">
                                        {stat.val}
                                    </h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">
                                        {stat.lab}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </div>
    </section>
);
export default AboutSection;