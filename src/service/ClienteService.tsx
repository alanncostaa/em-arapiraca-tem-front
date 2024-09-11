import { ICliente } from "@/app/types/cliente";
import { IFinanceiro } from "@/app/types/pagamento";
import { IProjeto } from "@/app/types/projeto";
import { ITarefa } from "@/app/types/tarefa";
import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "http://localhost:3333"
})

export class ClienteService{
    listarClientes(){
        return axiosInstance.get("/cliente");
    }

    totalClientes(){
        return axiosInstance.get("cliente/orderByCliente");
    }

    totalProjetos(){
        return axiosInstance.get("projeto/contProjs");
    }

    PagPend(){
        return axiosInstance.get("pagamento/contPag");
    }

    adicionarClientes(data: ICliente){
        return axiosInstance.post("/cliente", data);
    }

    adicionarProjetos(data: IProjeto){
        return axiosInstance.post("/projeto", data);
    }

    adicionarPagamentos(data: IFinanceiro){
        return axiosInstance.post("/pagamento", data);
    }

    adicionarTarefas(data: ITarefa){
        return axiosInstance.post("/tarefa", data);
    }

    verificarPagamento(id: string){
        return axiosInstance.get(`/pagamento/${id}`);
    }

    atualizarProjetos(id: string, data: IProjeto){
        return axiosInstance.put(`/projeto/${id}`, data);
    }

    deletarProjetos(id: string){
        return axiosInstance.delete(`/projeto/${id}`);
    }

    deletarCliente(id: string){
        return axiosInstance.delete(`/cliente/${id}`);
    }

    atualizarClientes(id: string, data: ICliente){
        return axiosInstance.put(`/cliente/${id}`, data);
    }

    listarProjetos(){
        return axiosInstance.get("/projeto");
    }

    listarPagamentos(){
        return axiosInstance.get("/pagamento");
    }

    encontrarCliente(id: string){
        return axiosInstance.get(`/cliente/${id}`);
    }

    somarPagamentos(){
        return axiosInstance.get("/pagamento/somPag");
    }

    ListarProjetosPorCLiente(id: string){
        return axiosInstance.get(`/projeto/${id}`);
    }
}