import { ICliente } from "@/app/types/cliente";
import Image from "next/image"
import { useEffect, useState } from 'react'
import Link from "next/link"
import { ModalFinanceiro } from "../ModalFinanceiro";
import { IFinanceiro } from "@/app/types/pagamento";
import { ModalProjetoEditar } from "../ModalProjetoEditar";
import { IProjeto } from "@/app/types/projeto";
import { ClienteService } from "@/service/ClienteService";

export interface IClienteProps {
    nome: string;
    celular: string;
    perfil: string;
}

export interface IHeaderProps {
    openModal: () => void;
}
export interface IProjetoProps {
    nome: string;
    valor: number;
    id_Projeto:string;
    data: string;
}

export function ClienteTop(cliente: ICliente){
    return <div className="mx-auto max-w-[1120px] flex justify-start pt-8">
        <div className="text-cabecalho text-[28px] font-black pr-4">
            <span>{cliente.nome}</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>|</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>{cliente.perfil}</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>|</span>
        </div>
        <div className="text-cabecalho text-[28px] font-normal pr-4">
            <span>{cliente.celular}</span>
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

const clienteService = new ClienteService();

const handleAddPagamento = async (pagamento: IFinanceiro) =>{
    pagamento.status = 'Pago'
    console.log(pagamento)
    await clienteService.adicionarPagamentos(pagamento)
    window.location.reload()

}

const handleUpdateProjeto = async (id:string, projeto: IProjeto) =>{
    console.log(projeto)
    console.log(id)
    await clienteService.atualizarProjetos(id, projeto)
    window.location.reload()
}

const handleDeleteProjeto = async (id:string) =>{
    console.log(id)
    await clienteService.deletarProjetos(id)
    window.location.reload()
}


export function Projeto({nome, valor, data, id_Projeto}:IProjetoProps){


    const [isModalFinanceiroOpen, setIsModalFinanceiroOpen] = useState(false);
    const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);

    const openModalFinanceiro = () => setIsModalFinanceiroOpen(true)
    const closeModalFinanceiro = () => setIsModalFinanceiroOpen(false)

    const openModalEditar = () => setIsModalEditarOpen(true)
    const closeModalEditar = () => setIsModalEditarOpen(false)

  

    return <div className="mx-auto max-w-[1120px] flex pt-2 pb-2">
        
        <div className="bg-button rounded-lg basis-3/4 p-4 mr-2">
            <button className="text-cabecalho w-full font-bold flex justify-between text-center  rounded-lg border-cabecalho opacity-80 hover:opacity-100" onClick={openModalEditar}>
                <h1 className="pt-1 pl-8">{nome}</h1>
                <Image className="" src="/images/editar.png" alt="Plus" width={32} height={32}/>
            </button>
            {isModalEditarOpen && (<ModalProjetoEditar id={id_Projeto} nome={nome} valor={valor} data={data} formTitle="Editar Projeto" DeleteProjeto={handleDeleteProjeto} UpdateProjeto={handleUpdateProjeto} closeModal={closeModalEditar}/>)}
        </div> 
        <div className="items-center bg-cabecalho rounded-lg  basis-1/4 p-4">
            <button className="flex w-full justify-center text-center rounded-lg border-cabecalho opacity-80  pr-8 hover:opacity-100" onClick={openModalFinanceiro}>
                <Image className="" src="/images/financeiro.png" alt="Plus" width={32} height={32}/>
            </button>
        </div>
        {isModalFinanceiroOpen && (<ModalFinanceiro formTitle="Financeiro"  closeModal={closeModalFinanceiro} AddPagamento={handleAddPagamento} id_Projeto={id_Projeto}/>)}
    </div>
}