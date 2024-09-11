'use client'

import Image from "next/image";
import { useState, useEffect } from 'react'
import { Header } from "../components/header";
import { Clientes, ClientesTop } from "../components/clientes";
import { ModalCliente } from "../components/ModalCliente";
import { ModalClienteEditar } from "../components/ModalClienteEditar";
import { ClienteService } from "@/service/ClienteService";
import { ICliente } from "../types/cliente";
import Router, { useRouter } from "next/router";
import { revalidatePath } from "next/cache";



export default function TelaClientes() {
const [isModalOpen, setIsModalOpen] = useState(false);

const [clientes, setClientes] = useState([]);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  

  const clienteService = new ClienteService();
  
  useEffect(() => {
    clienteService.listarClientes()
    .then((response) => {
      
      setClientes(response.data)
      console.log(response.data)
    }).catch((erro) =>{
      console.log(erro)
    })
    
    
  },[]);
  

  const handleAddCliente = async (cliente: ICliente) =>{
    console.log(cliente)
    await clienteService.adicionarClientes(cliente);
    window.location.reload()
  }

  return (
    <>
      <Header></Header>
      <ClientesTop openModal={openModal}></ClientesTop>
      {clientes.map((cliente, index)=>
        (<Clientes key={index}  nome={cliente['nome']} celular={cliente['celular']} perfil={cliente['perfil']} id={cliente['id']}></Clientes>)
      )}
      
      {isModalOpen && (<ModalCliente formTitle="Cadastro de Cliente" closeModal={closeModal} AddCliente={handleAddCliente}/>)}
      
      
    </>
  );
}
