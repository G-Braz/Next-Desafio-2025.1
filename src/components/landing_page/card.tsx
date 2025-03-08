import Image from "next/image"

interface CardProps{
    nome:string,
    modelo:string,
    preco:number,
    imagem:string
}

export default function Card ({nome, modelo, preco, imagem}:CardProps){
    return (
        <div className="bg-white py-6 gap-2 rounded-lg shadow flex flex-col items-center">
            <Image
                src={imagem}
                alt={"imagem"}
                width={500}
                height={500}
                className="w-64 h-full"
            />
            <h3 className="text-lg font-semibold mt-2">{nome}</h3>
            <p className="text-gray-500">{modelo}</p>
            <p className="text-red-500 font-bold mt-1 mb-5">R$ {preco}</p>
        </div>
    )
}