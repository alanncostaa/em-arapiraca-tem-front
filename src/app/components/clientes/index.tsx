import Image from "next/image"
import Link from "next/link"

export interface IHeaderProps {
    openModal: () => void;
}

export interface IClienteProps {
    openModal: () => void;
}

export function ClientesTop({openModal}: IHeaderProps){
    return <div className="mx-auto max-w-[1120px] flex justify-between pt-8">
        <div className="text-cabecalho text-[28px] font-black w-[200px]">
            <span>Clientes</span>
        </div>
        <div >
            <button className="text-cabecalho font-bold flex items-center justify-center text-center border-2 rounded-lg border-cabecalho opacity-80 py-2 pr-4 hover:opacity-100" onClick={openModal}>
                <p className="text-[16px] w-[185px]">Cadastrar Clientes</p>
                <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
            </button>
            
        </div>
    </div>
}

export function Clientes({openModal}:IClienteProps){
    return <div className="mx-auto max-w-[1120px] flex flex-wrap justify-between pt-4 pb-4 m-2">


            <div className="bg-button basis-3/4 rounded-lg justify-center items-center p-4">
                <Link className="items-center text-cabecalho w-full font-bold flex justify-between text-center  border-cabecalho opacity-80 hover:opacity-100" href="/DadosCliente">
                    <p className="text-[16px] w-[185px]">Cliente</p>
                    <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
                </Link>
            </div>

            <div className="bg-cabecalho rounded-lg basis-1/4 text-center p-4">
                <button onClick={openModal}>
                    <Image className="" src="/images/editar 2.png" alt="Plus" width={32} height={32}/>
                </button>

            </div>
         
    </div>
}