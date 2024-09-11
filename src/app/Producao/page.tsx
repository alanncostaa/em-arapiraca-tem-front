'use client'

import Image from "next/image";
import { Header } from "../components/header";
import { useState } from 'react'
import { ModalTarefa } from "../components/ModalTarefa";
import { ModalTarefaEditar } from "../components/ModalTarefaEditar";
import { Status } from "../components/status";


export default function Producao() {
  
  

  
  return (
    <>
      <Header></Header>
      <Status></Status>
      
    </>
    
  );
}
