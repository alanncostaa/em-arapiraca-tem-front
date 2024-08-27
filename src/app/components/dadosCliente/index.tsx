import Image from "next/image"
import Link from "next/link"

export interface IHeaderProps {
    openModal: () => void;
}
export interface IProjetoProps {
    openModal: () => void;
    openModalFinanceiro: () => void;
}

export function ClienteTop(){
    return <div className="mx-auto max-w-[1120px] flex justify-start pt-8">
        <div className="text-cabecalho text-[28px] font-black pr-4">
            <span>Cliente</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>|</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>@cliente</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>|</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>(82) 99999-9999</span>
        </div>
    </div>
}

export function NovoProjeto({openModal}:IHeaderProps){
    return <div className=" mx-auto max-w-[1120px] rounded-lg border-2 border-cabecalho flex justify-between pt-4 pb-4 m-4">
        <div >
            <button className="items-center text-cabecalho w-[1120px] font-bold flex justify-between text-center opacity-80 pr-8 hover:opacity-100" onClick={openModal}>
                <p className="text-[16px] w-[185px]">Novo Projeto</p>
                <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
            </button>
            
        </div>
    </div>
}

export function Projeto({openModal, openModalFinanceiro}:IProjetoProps){
    return <div className="mx-auto max-w-[1120px] flex pt-2 pb-2">
        <div className="bg-button rounded-lg basis-3/4 p-4 mr-2">
            <button className="text-cabecalho w-full font-bold flex justify-between text-center  rounded-lg border-cabecalho opacity-80 hover:opacity-100" onClick={openModal}>
                <h1 className="pt-1 pl-8">Projeto</h1>
                <Image className="" src="/images/editar.png" alt="Plus" width={32} height={32}/>
            </button>
        </div> 
        <div className="items-center bg-red rounded-lg  basis-1/4 p-4">
            <button className="flex w-full justify-center text-center rounded-lg border-cabecalho opacity-80  pr-8 hover:opacity-100" onClick={openModalFinanceiro}>
                <Image className="" src="/images/financeiro.png" alt="Plus" width={32} height={32}/>
            </button>
        </div>
    </div>
}