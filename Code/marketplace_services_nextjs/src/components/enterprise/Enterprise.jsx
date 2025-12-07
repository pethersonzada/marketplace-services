"use client";

import { useState } from "react";
import "../../styles/enterprise.css";

export default function Enterprise() {
    const [selected, setSelected] = useState(null);

    const plans = [
        {
            id: "mensal",
            title: "Plano Mensal",
            price: "R$ 149,90/mês",
            desc: "Ideal para empresas que precisam de serviços recorrentes e flexíveis.",
            benefits: [
                "Atendimentos ilimitados",
                "Suporte prioritário",
                "Troca de profissional quando quiser",
                "Cancelamento a qualquer momento"
            ]
        },
        {
            id: "anual",
            title: "Plano Anual",
            price: "R$ 99,90/mês",
            desc: "Melhor custo-benefício para quem quer contratar por longos períodos.",
            benefits: [
                "Economia de até 40%",
                "Atendimentos ilimitados",
                "Consultor dedicado",
                "Prioridade máxima em chamados"
            ]
        }
    ];

    return (
        <div className="enterprise-container">
            <h2 className="enterprise-title">Planos para Empresas</h2>

            <div className="enterprise-grid">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`enterprise-card ${selected === plan.id ? "selected" : ""}`}
                        onClick={() => setSelected(plan.id)}
                    >
                        <h3>{plan.title}</h3>
                        <p className="enterprise-price">{plan.price}</p>
                        <p className="enterprise-desc">{plan.desc}</p>

                        <ul className="enterprise-benefits">
                            {plan.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <button className="enterprise-btn">
                <a href="/login">Contratar Plano</a>
            </button>
        </div>
    );
}
