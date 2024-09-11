import Image from "next/image"
import Link from "next/link"


export function Header(){
    return <nav className="bg-cabecalho w-full h-[96px]">

        <div className="mx-auto max-w-[1120px] flex justify-between pt-8">

            <div>
                <Image className="max-h-10" src="/images/Logo.png" alt="Logo" width={86.1} height={42}/>
            </div>
            <div className="flex">
                <Link className="text-fundo font-bold opacity-80 size-[20px] w-[130px] px-5 py-6 rounded-md text-center flex items-center justify-center hover:opacity-100" href="/dadosProjetos">Dashboard</Link>

                <Link className="text-fundo font-bold opacity-80 size-[20px] w-[130px] px-5 py-6 rounded-md text-center flex items-center justify-center hover:opacity-100" href="/Clientes">Clientes</Link>
            </div>


        </div>
        
    </nav>
}