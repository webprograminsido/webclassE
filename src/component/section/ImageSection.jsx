import React, { useState } from "react";
import AnimatedContent from "../animation/AnimatedContent"; // Sesuaikan path-nya
const ImageSection = () => {
  const [activePage, setActivePage] = useState("page1");
  const [selectedImg, setSelectedImg] = useState(null);
  const galleryData = {
    page1: {
      title: "Memoria Balun",
      photos: Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        url: `/imgg/${i + 1}.jpeg`,
        desc: `Memoria Sira Iha Pagina ${i + 1}`,
      })),
    },
    page2: {
      title: "Memoria & Familia",
      photos: Array.from({ length: 6 }).map((_, i) => ({
        id: i + 7,
        url: `/imggg/${i + 1}.jpeg`,
        desc: `Memoria Sira Iha Pagina ${i + 1}`,
      })),
    },
    page3: {
      title: "Memoria & Familia",
      photos: Array.from({ length: 6 }).map((_, i) => ({
        id: i + 13,
        url: `/imgggg/${i + 1}.jpeg`,
        desc: `Memoria Sira Iha Pagina ${i + 1}`,
      })),
    },
  };

  return (
    <div className="p-4 bg-transparent min-h-screen text-white relative">
      {/* Header ho AnimatedContent */}
      <AnimatedContent distance={40} direction="vertical" duration={1.2}>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white uppercase tracking-widest">
            {galleryData[activePage].title}
          </h2>
          <div className="h-1.5 w-24 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
          <p className="text-gray-500 text-[10px] mt-6 uppercase tracking-[0.5em] font-medium italic">
            Hamutuk no Sai Familia Bo'ot Ida
          </p>
        </div>
      </AnimatedContent>

      {/* Navigasi Kik */}
      <AnimatedContent distance={20} direction="vertical" delay={0.2}>
        <div className="flex justify-center gap-3 mb-12">
          {Object.keys(galleryData).map((page, idx) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 border ${
                activePage === page
                  ? "bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(74,222,128,0.4)] scale-105"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-green-500/50"
              }`}
            >
              Page {idx + 1}
            </button>
          ))}
        </div>
      </AnimatedContent>

      {/* Grid 6 Foto ho Staggered Animation */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        {galleryData[activePage].photos.map((photo, index) => (
          <AnimatedContent
            key={`${activePage}-${photo.id}`}
            distance={50}
            direction="vertical"
            delay={index * 0.1}
            duration={0.8}
            scale={0.9}
          >
            <div
              onClick={() => setSelectedImg(photo)}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-white/5 cursor-pointer backdrop-blur-sm transition-all duration-500 hover:border-green-500/50 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.desc}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-[10px] font-bold text-green-400 tracking-widest uppercase">
                    View Image
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

      {/* MODAL: Tampilan Gambar Boot */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-6"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 p-2 rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 bg-green-500 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg"
            >
              ✕
            </button>
            <img
              src={selectedImg.url}
              className="w-full h-auto max-h-[60vh] object-cover rounded-2xl"
              alt="Enlarged"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-green-400 uppercase tracking-tighter">
                {selectedImg.desc}
              </h3>
              <p className="text-gray-500 text-[10px] mt-1 tracking-[0.3em]">
                TURMA E • MEMORY SIRA
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
