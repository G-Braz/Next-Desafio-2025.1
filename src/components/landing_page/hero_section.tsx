import Image from "next/image";
import CardHero from "./card_hero_section";

export default function HeroSection (){
    return (
        <>
        <div className="relative w-full h-90 bg-gray-200 flex justify-center items-center">
        <Image 
          src={"/capa.png"}
          alt={"imagem"}
          width={5000}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-row justify-around p-6 bg-white">
        <CardHero imagem="/frete.png" titulo="Frete grátis" subtitulo="Enviamos para todo Brasil"/>
        <CardHero imagem="/compra.png" titulo="Parcele suas compras" subtitulo="Em até 8x sem juros"/>
        <CardHero imagem="/parcela.png" titulo="7% de desconto" subtitulo="Para pagamentos via PIX"/>
        <CardHero imagem="/compra.png" titulo="Certificado SSL" subtitulo="Compra 100% segura"/>
      </div>
      </>
    )
}