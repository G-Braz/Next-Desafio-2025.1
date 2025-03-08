import Image from "next/image";

interface CardHero{
    imagem:string,
    titulo:string,
    subtitulo:string,
}

export default function CardHero({imagem, titulo, subtitulo}:CardHero){
    return(
        <div className="flex gap-4 items-center">   
            <Image
            src={imagem}
            alt={"imagem"}
            width={500}
            height={500}
            className="w-14 h-full"
            />
            <div className="flex flex-col">
            <span className="text-xl font-bold">{titulo}</span>
            <span>{subtitulo} </span>
            </div>
        </div>
    )
}