"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/provide.css";

export default function ProvidePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePublish = () => {
    if (!title.trim() || !category.trim() || !description.trim() || !price.trim() || !time.trim()) {
      setError("Por favor, preencha todos os campos antes de publicar!");
      setTimeout(() => setError(""), 4000);
      return;
    }

    router.push("/login"); 
  };

  return (
    <div className="provide-container">
      {error && <div className="form-error-overlay">{error}</div>}

      <h2 className="provide-title">Cadastrar Serviço</h2>
      <p className="provide-subtitle">Adicione as informações do serviço que você deseja oferecer.</p>

      <div className="provide-card">
        <div className="provide-field">
          <label className="provide-label">Título do Serviço</label>
          <input
            type="text"
            className="provide-input"
            placeholder="Ex: Conserto de Computadores"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="provide-field">
          <label className="provide-label">Categoria</label>
          <select
            className="provide-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione...</option>
            <option>Informática</option>
            <option>Reformas</option>
            <option>Design & Arte</option>
            <option>Limpeza</option>
            <option>Aulas & Treinamentos</option>
          </select>
        </div>

        <div className="provide-field">
          <label className="provide-label">Descrição</label>
          <textarea
            className="provide-textarea"
            placeholder="Descreva o serviço com detalhes..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="provide-row">
          <div className="provide-field provide-field-half">
            <label className="provide-label">Preço Base</label>
            <input
              type="number"
              className="provide-input"
              placeholder="R$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="provide-field provide-field-half">
            <label className="provide-label">Tempo Médio</label>
            <input
              type="text"
              className="provide-input"
              placeholder="Ex: 2 horas"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button className="all-buttons" onClick={handlePublish}>
          Publicar
        </button>
      </div>
    </div>
  );
}
