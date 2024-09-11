'use client'

import Image from "next/image";
import { Header } from "./components/header";
import { Clientes, ClientesTop } from "./components/clientes";
import { NovoProjeto, Projeto, ClienteTop } from "./components/dadosCliente";
import TelaClientes from "./Clientes/page";
import { Status } from "./components/status";
import Producao from "./Producao/page";
import axios from "axios";
import { useEffect, useState } from "react";
import DadosProjetos from "./dadosProjetos/page";

export default function Home() {


  return (
    <>
      
      <DadosProjetos></DadosProjetos>
      
      
    </>
  );
}
