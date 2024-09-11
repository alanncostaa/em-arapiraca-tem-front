import { useState } from "react";
import { Input } from "../Form/Input";
import { IProjeto } from "@/app/types/projeto";

export interface IFormModalProps {
    formTitle: string;
    id: string;
    UpdateProjeto: (id:string, projeto: IProjeto)=> void;
    DeleteProjeto: (id:string)=> void;
    closeModal: () => void;
    nome: string;
    valor: number;
    data: string;
}


export function ModalProjetoEditar({formTitle, id, nome, valor, data, DeleteProjeto, UpdateProjeto, closeModal}: IFormModalProps){
  
  const [nomeUp, setNome] = useState(nome);
  const [valorUp, setValor] = useState(valor);
  const [dataUp, setData] = useState(data);

  nome = nomeUp;
  valor = valorUp;
  data = dataUp;

  const handleDeleteProjeto = () => {
    
    DeleteProjeto(id)
    
    closeModal();
  }

  const handleUpdateProjeto = () => {
    
    UpdateProjeto(id, {
      nome,
      valor,
      data
    })
    
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
            <Input type="text" placeholder="Nome do Projeto" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(Number(e.target.value))} />
            <Input type="date" placeholder="Data de Vencimento" value={data} onChange={(e) => setData(e.target.value)}/>            
        </form>
        <div className="bg-button px-12 py-3 flex sm:flex-row-reverse w-full mb-16">          
          <button type="button" className="mt-3 w-full justify-center rounded-md bg-cabecalho text-white px-2 py-4 text-normal font-semibold shadow-sm m-2 hover:opacity-80 sm:mt-0" onClick={handleUpdateProjeto}>Salvar</button>
          <button type="button" className="mt-3 w-full justify-center border-2 border-cabecalho rounded-md  text-cabecalho px-2 py-4 text-normal font-semibold shadow-sm m-2 hover:opacity-80 sm:mt-0" onClick={handleDeleteProjeto}>Excluir</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}