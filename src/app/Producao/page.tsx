'use client'

import Image from "next/image";
import { Header } from "../components/header";
import { useState } from 'react'
import { ModalTarefa } from "../components/ModalTarefa";
import { ModalTarefaEditar } from "../components/ModalTarefaEditar";
import { Status } from "../components/status";


export default function TelaClientes() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTarefaOpen, setIsModalTarefaOpen] = useState(false);

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const openModalTarefa = () => setIsModalTarefaOpen(true)
  const closeModalTarefa = () => setIsModalTarefaOpen(false)
  
  return (
    <>
      <Header></Header>
      <Status openModal={openModal} openModalTarefa={openModalTarefa}></Status>
      {isModalOpen && (<ModalTarefa formTitle="Cadastro de Tarefa" closeModal={closeModal}/>)}
      {isModalTarefaOpen && (<ModalTarefaEditar formTitle="Editar de Tarefa" closeModal={closeModalTarefa}/>)}
    </>
    
  );
}
