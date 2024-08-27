import Image from "next/image"
import Link from "next/link"
import { Iten } from "../itenStatus";

export interface IHeaderProps {
    openModal: () => void;
    openModalTarefa: () => void;
}

export function Status({openModal, openModalTarefa}:IHeaderProps){
    return <div className="mx-auto max-w-[1120px] flex flex-wrap justify-center pt-8">
        
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between  text-center rounded-lg opacity-80 py-2 px-4 pr-8 m-2 hover:opacity-100" onClick={openModal}>
                <p className="text-[16px] ">Para Gravar</p>
                <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                <Iten openModalTarefa={openModalTarefa} tarefa="Tarefa 1"></Iten>
            </div>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Editar</p>
                <Image className="" src="/images/Ellipse 2.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                
            </div>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Editado</p>
                <Image className="" src="/images/Ellipse 3.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                
            </div>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Alterar</p>
                <Image className="" src="/images/Ellipse 4.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                
            </div>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Postar</p>
                <Image className="" src="/images/Ellipse 5.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                
            </div>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Postado</p>
                <Image className="" src="/images/Ellipse 6.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <div className="m-4 justify-center text-center">
                
            </div>
        </div>
        

        
        
    </div>
}