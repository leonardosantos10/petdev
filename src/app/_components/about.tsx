import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6eC] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h1 className="text-4xl font-bold">SOBRE</h1>
            <h3 className="text-2xl font-bold">
              Mais de 10 anos cuidando com amor do seu pet
            </h3>
            <p>
              A Patinhas Pet Shop & Vet nasceu do amor incondicional pelos
              animais. Somos uma clínica veterinária e pet shop completa, com
              equipe especializada e equipamentos modernos para oferecer o
              melhor atendimento. Nossa missão é proporcionar saúde, bem-estar e
              felicidade para seu melhor amigo, com atendimento humanizado e
              serviços de excelência.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Veterinários especializados e experientes.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipamentos modernos e tecnologia de ponta.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Atendimento 24 horas para emergências.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Ambiente confortável e acolhedor.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#2196f3] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 
            rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via whatsApp
              </a>
              <a
                href="#"
                className="bg-[#2196f3] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 
            rounded-md"
              >
                <MapPin className="w-5 h-5 text-white" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
