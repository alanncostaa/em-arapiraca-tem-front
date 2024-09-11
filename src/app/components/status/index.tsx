import Image from "next/image"
import Link from "next/link"
import { Iten } from "../itenStatus";
import { ModalTarefa } from "../ModalTarefa";
import { useState } from "react";
import { ClienteService } from "@/service/ClienteService";
import { ITarefa } from "@/app/types/tarefa";
import {DragDropContext, Draggable, Droppable, DropResult} from "@hello-pangea/dnd"
import { constants } from "buffer";
import { Result } from "postcss";

const initialTasks = {
    "Para Gravar": [{ id: "1", content: "Tarefa 1" }],
    "Para Editar": [{ id: "2", content: "Tarefa 2" }],
    "Editado": [{ id: "3", content: "Tarefa 3" }],
    "Para Alterar": [{ id: "4", content: "Tarefa 4" }],
    "Para Postar": [],
    "Postado": []
  };

const clienteService = new ClienteService()

const handleAddTarefa = async (tarefa: ITarefa) =>{
    console.log(tarefa)
}

export function Status(){

    

    const [status, setStatus] = useState([
        "Para Gravar",
        "Para Editar",
        "Editado",
        "Para Alterar",
        "Para Postar",
        "Postado",
    ])

    interface Column {
        id: string;
        title: string;
        taskIds: string[];
      }
      
      interface Data {
        columns: {
          [key: string]: Column; // Define que as chaves podem ser qualquer string
        };
      }
      
      const [data, setData] = useState<Data>({
        columns: {
          "Para Gravar": { id: "Para Gravar", title: "Para Gravar", taskIds: ['1'] },
          "Para Editar": { id: "Para Editar", title: "Para Editar", taskIds: ['2'] },
          "Editado": { id: "Editado", title: "Editado", taskIds: ['3'] },
          "Para Alterar": { id: "Para Alterar", title: "Para Alterar", taskIds: ['4'] },
          "Para Postar": { id: "Para Postar", title: "Para Postar", taskIds: ['5'] },
          "Postado": { id: "Postado", title: "Postado", taskIds: ["6"] },
        }
      });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)


  // Função chamada quando o drag termina
    const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Se não houver destino (item solto fora de qualquer coluna), não faz nada
    if (!destination) return;

    // Se o item foi solto na mesma posição, não faz nada
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    // Busca a coluna de origem e a de destino

    const startColumn = data.columns[source.droppableId]
    console.log("oi", startColumn)
    const finishColumn = data.columns[destination.droppableId];
    console.log("oi", finishColumn)

    // Se as colunas forem as mesmas, apenas reorganiza os itens dentro da mesma coluna
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // Remove o item da posição original
      newTaskIds.splice(destination.index, 0, draggableId); // Adiciona na nova posição

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Se as colunas forem diferentes, move o item de uma coluna para outra
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    });
  };

  
    return <DragDropContext onDragEnd={onDragEnd}>
    <div className="mx-auto max-w-[1120px] flex flex-wrap justify-center pt-8">
        
        
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between  text-center rounded-lg opacity-80 py-2 px-4 pr-8 m-2 hover:opacity-100" onClick={openModal}>
                <p className="text-[16px] ">Para Gravar</p>
                <Image className="" src="/images/plus.png" alt="Plus" width={32} height={32}/>
            </button>
            </div>
            
            <Droppable key={'Para Gravar'} droppableId={`Para Gravar`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            
                            <Iten index={1} tarefa={1}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
            
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Editar</p>
                <Image className="" src="/images/Ellipse 2.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            
            <Droppable key={'Para Editar'} droppableId={`Para Editar`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            <Iten index={1} tarefa={2}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Editado</p>
                <Image className="" src="/images/Ellipse 3.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <Droppable key={'Editado'} droppableId={`Editado`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            <Iten index={1} tarefa={3}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Alterar</p>
                <Image className="" src="/images/Ellipse 4.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <Droppable key={'Para Alterar'} droppableId={`Para Alterar`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            <Iten index={1} tarefa={4}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Para Postar</p>
                <Image className="" src="/images/Ellipse 5.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <Droppable key={'Para Postar'} droppableId={`Para Postar`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            <Iten index={1} tarefa={5}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
        </div>
        <div className="bg-button w-full rounded-lg basis-1/4 m-2">
            <div>
            <button className="w-full text-cabecalho font-bold flex items-center justify-between text-center rounded-lg py-2 px-4 pr-8 m-2">
                <p className="text-[16px] ">Postado</p>
                <Image className="" src="/images/Ellipse 6.png" alt="Plus" width={20} height={20}/>
            </button>
            </div>
            <Droppable key={'Postado'} droppableId={`Postado`}>
                    {
                        (provided)=>(
                            <div className="m-4 justify-center text-center" {...provided.droppableProps} ref={provided.innerRef}>

                            <Iten index={1} tarefa={6}></Iten>

                            {provided.placeholder}
                            </div>
                        )
                        
                    }
                    
                
            </Droppable>
        </div>
        
        {isModalOpen && (<ModalTarefa AddTarefa={handleAddTarefa} formTitle="Cadastro de Tarefa" closeModal={closeModal}/>)}
        
        
    </div>
    </DragDropContext>
}