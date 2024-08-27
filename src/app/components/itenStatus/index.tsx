import Image from "next/image"
import Link from "next/link"

export interface IItenProps {
    tarefa: string;
    openModalTarefa: () => void;
}

export function Iten({tarefa, openModalTarefa}:IItenProps){
    return <div className="bg-cabecalho w-full text-white text-center mx-auto flex rounded-lg opacity-80 justify-center p-2 m-2 hover:opacity-100">
        <button onClick={openModalTarefa}>{tarefa}</button>
    </div>
}