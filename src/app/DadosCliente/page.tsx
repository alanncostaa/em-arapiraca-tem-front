'use client'

import Image from "next/image";
import { Header } from "../components/header";
import { useState } from 'react'
import { NovoProjeto, Projeto, ClienteTop } from "../components/dadosCliente";
import { ModalProjeto } from "../components/ModalProjeto";
import { ModalProjetoEditar } from "../components/ModalProjetoEditar";
import { ModalFinanceiro } from "../components/ModalFinanceiro";


export default function TelaClientes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);
  const [isModalFinanceiroOpen, setIsModalFinanceiroOpen] = useState(false);

  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const openModalEditar = () => setIsModalEditarOpen(true)
  const closeModalEditar = () => setIsModalEditarOpen(false)

  const openModalFinanceiro = () => setIsModalFinanceiroOpen(true)
  const closeModalFinanceiro = () => setIsModalFinanceiroOpen(false)

  return (
    <>
      <Header></Header>
      <ClienteTop></ClienteTop>
      <NovoProjeto openModal={openModal}></NovoProjeto>
      {isModalOpen && (<ModalProjeto formTitle="Cadastro de Projeto" closeModal={closeModal}/>)}
      <Projeto openModal={openModalEditar} openModalFinanceiro={openModalFinanceiro}></Projeto>
      {isModalEditarOpen && (<ModalProjetoEditar formTitle="Editar Projeto" closeModal={closeModalEditar}/>)}

      {isModalFinanceiroOpen && (<ModalFinanceiro formTitle="Financeiro" closeModal={closeModalFinanceiro}/>)}
      
    </>
    
  );
}
