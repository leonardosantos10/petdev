"use client";

import { useState } from "react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { List, X } from "lucide-react";
import dogImg from "../../../public/hero-dog.webp";
import Image from "next/image";

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-[#2196f3] text-white relative overflow-hidden"
    >
      {/* Menu de Navegação */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2196f3]/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center h-16 md:h-20">
            {/* Logo ou Nome - Posicionado à esquerda */}
            <div className="absolute left-2 md:left-4 text-sm md:text-xl lg:text-2xl font-bold whitespace-nowrap">
              Max Black
            </div>

            {/* Menu Desktop - Centralizado */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-yellow-300 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <List className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2196f3] border-t border-white/20">
            <ul className="container mx-auto px-4 py-4 space-y-3 text-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 hover:text-yellow-300 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <div>
        <Image
          src={dogImg}
          alt="Foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-32 md:pt-24 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6 ml-4 md:ml-8">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl not-odd: font-bold leading-10 gap-14 pt-8 md:pt-12"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Cuidando do seu melhor amigo com todo amor e carinho.
            </h1>
            <p
              className="lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Pet shop Max Black e Clínica Veterinária completa com
              profissionais especializados, equipamentos modernos e muito
              carinho para seu pet!
            </p>

            <a
              data-aos="fade-up"
              data-aos-delay="300"
              target="_blank"
              href={`https://wa.me/5511911089322?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via Whatssap
            </a>

            <div className="mt-8">
              <p
                className="text-sm mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na Primeira compra.
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
