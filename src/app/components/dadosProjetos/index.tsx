import { Imprima } from "next/font/google";
import { Input } from "../Form/Input";
import { useState, useEffect } from "react";
import { ClienteService } from "@/service/ClienteService";

export function ProjetoTop(){

      const clienteService = new ClienteService()

      const [pagamentos, setPagamentos] = useState([])
      const [total, setTotal] = useState(0)
      const [totalProjetos, setTotalProjetos] = useState(0)
      const [totalCliente, setTotalClientes] = useState(0)
      const [totalPag, setTotalPag] = useState(0)

      
      
      useEffect(() => {
          clienteService.totalClientes()
          .then((response) => {
            
            setTotalClientes(response.data)
          }).catch((erro) =>{
            console.log(erro)
          }),
          clienteService.totalProjetos()
          .then((response) => {
            
            setTotalProjetos(response.data)
          }).catch((erro) =>{
            console.log(erro)
          }),
          clienteService.PagPend()
          .then((response) => {
            
            setTotalPag(response.data)
          }).catch((erro) =>{
            console.log(erro)
          }),
          clienteService.somarPagamentos()
          .then((response) => {
            setTotal(response.data['_sum']['valor'])
          }).catch((erro) =>{
            console.log(erro)
          })
          
          
        },[]);


    return <div className="items-center mx-auto max-w-[1120px] flex justify-center pt-8">
        <div className="bg-button h-full items-center w-full rounded-md  px-4 py-36">  
              <h1 className="font-semibold text-center leading-9 text-cabecalho pb-2 text-2xl">Receita do Mês</h1>     
              <h1 className="font-semibold text-center leading-9 text-cabecalho text-[80px] py-6 text-2xl">R${total}</h1>
        
        </div>
            
        <div className="w-full flex flex-wrap justify-center rounded-md pt-5 sm:p-6 sm:pb-4">       
              <div className="itens-center bg-cabecalho w-full text-center text-white rounded-md p-4 px-2 m-1">
                  <h1>Clientes Ativos</h1>
                  <h1 className="text-[50px]">{totalCliente}</h1>
              </div>
              <div className="bg-cabecalho w-full text-center text-white rounded-md p-4 px-2 m-1">
                  <h1>Projetos Ativos</h1>
                  <h1 className="text-[50px]">{totalProjetos}</h1>
              </div>
              <div className="bg-cabecalho w-full text-center text-white rounded-md p-4 px-2 m-1">
                  <h1>Projetos Pagos</h1>
                  <h1 className="text-[50px]">{totalPag}</h1>
              </div>
        
        </div>
        
        
    </div>
}
