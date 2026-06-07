import Aurora from "./component/bgAnimation/Aurora";
import AnimatedContent from "./component/animation/AnimatedContent";
import Navbar from "./component/animation/Navbar";
import ImageSection from "./component/section/ImageSection";
import HeroSection from "./component/section/HeroSection";
import AboutSection from "./component/section/AboutSection";
import StructureSection from "./component/section/StructureSection";
import FooterSection from "./component/section/FooterSection";

// --- MAIN APP COMPONENT / COMPOMEMT UTAMA ---
const App = () => {
  const images = [
    "/img/1.jpeg",
    "/img/2.jpeg",
    "/img/3.jpeg",
    "/img/4.jpeg",
    "/img/5.jpeg",
    "/img/6.jpeg",
  ];
  const classMembers = [
    {
      name: "Robby Do Carmo",
      role: "Chefe da Turma",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Sidónio Vacu Cristovao",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Davio B. da Silva",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Riqueberto S Ribeiro",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Zelio M. de Piedade",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Donancio A. Martins",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Rivaldo V. Moniz",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Joanito G. M. C. Castro",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Geovanio N. G. guteres",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Fabio C. F. dos Santos",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Domingos Benevides",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Rivaldo X. Silva",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Ezequil S. Fernandes",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Cancio da Costa Lopes",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Daniel R. C. Bria",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Eduardo Lopes",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Januario Punef",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Gilson G Soares",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Fransisco X. Tolo",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Rui F. A. do Carmo",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Ricaldo Kevin",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Cristiano de A. M",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Milton R. B.",
      role: "Membru",
      image: "/img/fotocontoh.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Manuela da Consencao",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Noeva A. P. A. Martins",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Ernestina L. Fernandes",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Petronela de Fatima",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Gracya Z. N. D. Antunes",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Nadia F. Martins",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Tya M. C. L. A. P. Martins",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Livania M. C de Jesus",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Epefinia Pereira",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Dircia R. Orleans",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Claudia de Jesus",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Catarina M. Araujo",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Deonisia A. da Silva",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Ofelia de Jesus",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Maria Auxiladora",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
    {
      name: "Maria A. A. da Costa",
      role: "Membru",
      image: "/img/fetoo.webp",
      description: "Familia Bo'ot Turma E",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        <Navbar />
        {/* Background Aurora */}
        <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-slate-900 z-[-1]">
          <Aurora
            colorStops={["#9359ff", "#b9c1bb", "#18f678"]}
            blend={2}
            amplitude={1.0}
            speed={1.2}
          />
        </div>
        <div className="w-full container mx-auto pt-24 md:pt-8">
          {/* Varanda */}
          <HeroSection />
          {/* Kona ba */}
          <AboutSection images={images} />
          {/* Estrutura */}
          <StructureSection members={classMembers} />
          {/* Imagen */}
          <section id="image">
            <ImageSection />
          </section>
          {/* Quote */}
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default App;
