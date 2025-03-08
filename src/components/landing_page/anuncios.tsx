import Card from "./card"

interface AnunciosProps {
    titulo:string
}

export default function Anuncios({titulo}:AnunciosProps){
    const tennis = [
        {nome:"Tenis Adidas", modelo:"Modelo Classico", preco:299.99, imagem:"/tenis.png"},
        {nome:"Tenis Lakai", modelo:"Modelo Classico", preco:299.99, imagem:"/tenis.png"},
        {nome:"Tenis NewBalance", modelo:"Modelo Classico", preco:299.99, imagem:"/tenis.png"},
        {nome:"Tenis Nike", modelo:"Modelo Classico", preco:299.99, imagem:"/tenis.png"},
    ]
    
    return(
    <div className="p-6 flex flex-col w-3/4">
        <h2 className="text-2xl font-bold mb-4 w-full text-center">{titulo}</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
        { tennis.map((tenni,index ) => (
            <Card key={index} imagem={tenni.imagem} nome={tenni.nome} modelo={tenni.modelo} preco={tenni.preco} />

        )) }
        </div>
    </div>
    )
}