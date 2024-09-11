import { use, useState } from "react";
import { Input } from "../Form/Input";
import { ICliente } from "@/app/types/cliente";
import { ClienteService } from "@/service/ClienteService";

export interface IFormModalProps {
    formTitle: string;
    closeModal: () => void;
    confirmacao: () => void;
}
const clienteService  = new ClienteService()



export function ModalConfirm({formTitle, confirmacao, closeModal}: IFormModalProps){


  const [confirmar, setConfirmar] = useState(false)
  
  const handleConfirmar = () => {

    setConfirmar(true);

    console.log(confirmar)
    
    closeModal();
  }

  
    return (
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
        
        <div className="bg-button px-12 py-3 flex sm:flex-row-reverse w-full mb-16">          
          <button type="button" className="mt-3 w-full justify-center rounded-md bg-cabecalho text-white px-2 py-4 text-normal font-semibold shadow-sm hover:opacity-80 m-2 sm:mt-0" onClick={handleConfirmar}>Sim</button>
          <button type="button" className="mt-3 w-full justify-center rounded-md border-2 border-cabecalho text-cabecalho px-2 py-4 text-normal font-semibold shadow-sm hover:opacity-80 m-2 sm:mt-0" onClick={closeModal}>Não</button>
         
        </div>
      </div>
    </div>
  </div>
</div>
    )
}