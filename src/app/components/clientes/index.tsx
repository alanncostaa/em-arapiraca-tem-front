import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { ModalClienteEditar } from "../ModalClienteEditar";
import { ICliente } from "@/app/types/cliente";
import { ClienteService } from "@/service/ClienteService";
import { ModalConfirm } from "../ModalConfirm";
export interface IHeaderProps {
    openModal: () => void;
    
}

export interface IClienteProps {
    nome: string;
    celular: string;
    perfil: string;
    id: string;
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
 const clienteService = new ClienteService()
const handleUpdateCliente = async (id:string, cliente: ICliente) =>{
    console.log(cliente)
    console.log(id)
    await clienteService.atualizarClientes(id, cliente)
    window.location.reload()
  }

  const handleDeleteCliente = async (id:string) =>{
    console.log(id)
    await clienteService.deletarCliente(id)
    window.location.reload()
  }


export function Clientes({ celular, perfil, nome, id}:IClienteProps){
    const openModalCliente = () => setIsModalClienteOpen(true)
  const closeModalCliente = () => setIsModalClienteOpen(false)
  const [isModalClienteOpen, setIsModalClienteOpen] = useState(false);

  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const openModalConfirm = () => setIsModalConfirmOpen(true)
    const closeModalConfirm = () => setIsModalConfirmOpen(false)
    return <div className="mx-auto max-w-[1120px] flex flex-wrap justify-between pt-4  m-2">


            <div className="bg-button basis-3/4 rounded-lg justify-center items-center p-4">
                <Link className="items-center text-cabecalho w-full font-bold flex justify-between text-center  border-cabecalho opacity-80 hover:opacity-100" href={{
    pathname: "/DadosCliente",
    query: { id: `${id}` },
  }}>
                    <p className="text-[16px] w-[185px]">{nome}</p>
                    <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
                </Link>
            </div>

            <div className="bg-cabecalho rounded-lg basis-1/4 text-center p-4">
                <button onClick={openModalCliente}>
                    <Image className="" src="/images/editar 2.png" alt="Plus" width={32} height={32}/>
                </button>

            </div>
            {isModalClienteOpen && (<ModalClienteEditar DeleteCliente={handleDeleteCliente} UpdateCliente={handleUpdateCliente} nome={nome} celular={celular} perfil={perfil} id={id} formTitle="Editar Cliente" closeModal={closeModalCliente}/>)}
    </div>
}