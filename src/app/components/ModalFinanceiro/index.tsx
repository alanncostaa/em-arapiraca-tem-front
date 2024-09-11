`use cliente`

import { use, useState, useEffect } from "react";
import { Input } from "../Form/Input";
import { IFinanceiro } from "@/app/types/pagamento";
import { stat } from "fs";
import { ClienteService } from "@/service/ClienteService";

export interface IFormModalProps {
    formTitle: string;
    id_Projeto: string;
    closeModal: () => void;
    AddPagamento: (pagamento:IFinanceiro) => void;
}

export function ModalFinanceiro({formTitle, closeModal, AddPagamento, id_Projeto}: IFormModalProps){
  
  const [status, setStatus] = useState('Pago')
  const [cor, setCor] = useState('red')

  const clienteService = new ClienteService()

  

  useEffect(() => {
    clienteService.verificarPagamento(id_Projeto)
    .then((response) => {
    
      console.log(response.data)

      if(response.data.length > 0){
        setStatus('Pago')
        setCor('color-green')
        
        setValor(response.data[0]['valor'])
        setData(response.data[0]['data'])
      }else{
        setStatus('A Receber')
      }

    }).catch((erro) =>{
      console.log(erro)
    })
    
    
  },[]);


  const handleBotao = (status: string) => {
      if(status == 'A Receber'){
        return <button type="button" className="mt-3 w-full justify-center rounded-md bg-cabecalho text-white px-2 py-4 text-normal font-semibold shadow-sm hover:opacity-80 sm:mt-0" onClick={handleAddPagamento}>Receber</button>
      }else{

      }
  }

  const handleDados= (status: string, data: string, valor: number) => {
    if(status == 'A Receber'){
      return <>
      <Input type="number" placeholder="Valor" onChange={(e) => setValor(Number(e.target.value))}/>
      <Input type="date" placeholder="Data do Pagamento" onChange={(e) => setData(e.target.value)}/>
      
      </>
      
    }else{
      return <div>
          <div className={`bg-cabecalho text-center text-white rounded-md mt-2 p-4 justify-center`}>
            <h1 >Valor: R$ {valor}</h1>
          </div>
          <div className={`bg-cabecalho text-center text-white rounded-md mt-2 p-4 justify-center`}>
            <h1 >Data: {data}</h1>
          </div>
      </div>
      
      
    
    }
}
  
  const [valor, setValor] = useState(0);
  const [data, setData] = useState('');

  const handleAddPagamento = () => {

    AddPagamento({
      valor,
      data,
      status,
      id_Projeto,
    }),

    closeModal();
  }
    return (
      
      <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"> 
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">     
      <div className="relative transform overflow-hidden rounded-lg bg-button text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        {/* Botão de fechamento "X" */}
        <button 
          type="button" 
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600" 
          onClick={closeModal}
          aria-label="Fechar">
          <span className="text-2xl">&times;</span>
        </button>
        <div className="bg-button px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">            
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h1 className="font-semibold leading-9 text-cabecalho text-2xl" id="modal-title">{formTitle}</h1>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4 px-12 mt-4 mb-6">

           

            <div className={`text-center font-semibold text-cabecalho border-2 border-cabecalho rounded-md p-4 justify-center`}>
              <h1 >{status}</h1>
            </div>
            
            
            {handleDados(status, data, valor)}
        </form>
        <div className="bg-button px-12 py-3 flex sm:flex-row-reverse w-full mb-16">        
           {handleBotao(status)}
         
        </div>
      </div>
    </div>
  </div>
</div>
      </>
        
    )
}