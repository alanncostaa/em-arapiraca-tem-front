'use client'

import Image from "next/image";
import { useState } from 'react'
import { Header } from "../components/header";
import { Clientes, ClientesTop } from "../components/clientes";
import {ModalCliente} from "../components/ModalCliente";
import {ModalClienteEditar} from "../components/ModalClienteEditar";

export default function TelaClientes() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [isModalClienteOpen, setIsModalClienteOpen] = useState(false);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const openModalCliente = () => setIsModalClienteOpen(true)
  const closeModalCliente = () => setIsModalClienteOpen(false)

  return (
    <>
      <Header></Header>
      <ClientesTop openModal={openModal}></ClientesTop>
      <Clientes openModal={openModalCliente}></Clientes>
      {isModalOpen && (<ModalCliente formTitle="Cadastro de Cliente" closeModal={closeModal}/>)}
      {isModalClienteOpen && (<ModalClienteEditar formTitle="Editar Cliente" closeModal={closeModalCliente}/>)}
      
    </>
  );
}
