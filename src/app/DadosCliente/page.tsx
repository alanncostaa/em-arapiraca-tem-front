'use client'

import Image from "next/image";
import { Header } from "../components/header";
import { useEffect, useState } from 'react'
import { NovoProjeto, Projeto, ClienteTop } from "../components/dadosCliente";
import { ModalProjeto } from "../components/ModalProjeto";
import { ModalProjetoEditar } from "../components/ModalProjetoEditar";
import { ModalFinanceiro } from "../components/ModalFinanceiro";
import { ClienteService } from "@/service/ClienteService";
import { useSearchParams } from 'next/navigation'
import { IProjeto } from "../types/projeto";
import { IFinanceiro } from "../types/pagamento";



export default function DadosClientes() {

  const searchParams = useSearchParams()
  const search = searchParams.get('id')

  console.log(search)

  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditarOpen, setIsModalEditarOpen] = useState(false);

  const [projetos, setProjetos] = useState([]);
  const [dados, setClientes] = useState({id: '', nome: '', celular:'', perfil: ''});

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  

  const clienteService = new ClienteService();
  
  
  useEffect(() => {
   
    if(!search) return;
    clienteService.ListarProjetosPorCLiente(search)
    .then((response) => {

      setProjetos(response.data)

    }).catch((erro) =>{
      console.log(erro)
    }),
    clienteService.encontrarCliente(search)
    .then((response) => {

      setClientes(response.data)

    }).catch((erro) =>{
      console.log(erro)
    })
  },[]);

  const handleAddProjeto = async (projeto: IProjeto) =>{
    console.log(projeto)
    await clienteService.adicionarProjetos(projeto);
    window.location.reload()
  }
  
  if(!search) return;
  return (

    
    <>
      <Header></Header>
      

      {console.log(dados)}
      <ClienteTop nome={dados['nome']} celular={dados['celular']} perfil={dados['perfil']}></ClienteTop>
      
      <NovoProjeto openModal={openModal}></NovoProjeto>
      {isModalOpen && (<ModalProjeto formTitle="Cadastro de Projeto" closeModal={closeModal} AddProjeto={handleAddProjeto} id={search}/>)}
      {
        projetos.map((projeto, index)=>(

            <>
        
            <Projeto key={index} data={projeto['data']} valor={projeto['valor']} id_Projeto={projeto['id']} nome={projeto['nome']} 
            
            ></Projeto>
            
            </>
          
        ))
      }

      
      
      
      
    </>
    
  );
}
