"use client";
import { useState } from "react";
import "../../styles/calendario.css";

export default function ProfileComponent() {
    
const [dataAtual, setDataAtual] = useState(new Date());

const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();

const nomeDosMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const diasNoMes = new Date(ano, mes + 1, 0).getDate();
const diasSemanaInicio = new Date(ano, mes, 1).getDay();

const mudarMes = (direcao) => {
    setDataAtual(new Date(ano, mes + direcao, 1));
};

const rederizarDias = () => {
    const arrayDeDias = [];


    for (let i = 0; i < diasSemanaInicio; i++) {
    arrayDeDias.push(
        <div key={`vazio-${i}`} className="dia-celula vazio"></div>
    );
    }


    for (let dia = 1; dia <= diasNoMes; dia++) {
    const ehHoje =
        dia === new Date().getDate() &&
        mes === new Date().getMonth() &&
        ano === new Date().getFullYear();

    arrayDeDias.push(
        <div
        key={dia}
        className={`dia-celula ${ehHoje ? "hoje" : ""}`}
        >
        {dia}
        </div>
    );
    }

    return arrayDeDias;
};

return (
    <div className="calendario-container">
    <div className="calendario-cabecalho">
        <button onClick={() => mudarMes(-1)}>&lt;</button>
        <h2>{nomeDosMeses[mes]} {ano}</h2>
        <button onClick={() => mudarMes(1)}>&gt;</button>
    </div>

    <div className="semana-cabecalho">
        {diasDaSemana.map((dia) => (
        <div key={dia} className="nome-dia-semana">
            {dia}
        </div>
        ))}
    </div>

    
    <div className="dias-grid">
        {rederizarDias()}
    </div>
    </div>

)
}