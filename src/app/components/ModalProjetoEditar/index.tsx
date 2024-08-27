import { useState } from "react";
import { Input } from "../Form/Input";

export interface IFormModalProps {
    formTitle: string;
    closeModal: () => void;
}


export function ModalProjetoEditar({formTitle, closeModal}: IFormModalProps){
  const handleAddCliente = () => {
    
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
        <form className="flex flex-col gap-4 px-12 mt-4 mb-6">
            <Input type="text" placeholder="Nome do Projeto" />
            <Input type="number" placeholder="Valor"/>
            <Input type="date" placeholder="Data de Vencimento"/>            
        </form>
        <div className="bg-button px-12 py-3 flex sm:flex-row-reverse w-full mb-16">          
          <button type="button" className="mt-3 w-full justify-center rounded-md bg-color-green text-white px-2 py-4 text-normal font-semibold shadow-sm m-2 hover:opacity-80 sm:mt-0" onClick={handleAddCliente}>Salvar</button>
          <button type="button" className="mt-3 w-full justify-center rounded-md bg-red text-white px-2 py-4 text-normal font-semibold shadow-sm m-2 hover:opacity-80 sm:mt-0" onClick={handleAddCliente}>Excluir</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}