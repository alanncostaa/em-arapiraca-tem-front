import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { ModalTarefaEditar } from "../ModalTarefaEditar";
import {DragDropContext, Draggable} from "@hello-pangea/dnd"

export interface IItenProps {
    tarefa: number;
    index: number;
}

export function Iten({tarefa, index}:IItenProps){
    const [isModalTarefaOpen, setIsModalTarefaOpen] = useState(false);

    const openModalTarefa = () => setIsModalTarefaOpen(true)
    const closeModalTarefa = () => setIsModalTarefaOpen(false)

    return <Draggable key={tarefa} draggableId={`${tarefa}`} index={index}>
        {
            (provided)=>(
                <div className="bg-cabecalho w-full text-white text-center mx-auto flex rounded-lg opacity-80 justify-center p-2 m-2 hover:opacity-100" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                <button onClick={openModalTarefa}>{tarefa}</button>
                {isModalTarefaOpen && (<ModalTarefaEditar formTitle="Editar de Tarefa" closeModal={closeModalTarefa}/>)}
                </div>
            )
            
        }
        
    
    </Draggable>
}