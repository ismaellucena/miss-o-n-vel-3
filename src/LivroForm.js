import React, { useState } from 'react';
import { ControleLivros } from './controle/ControleLivros'; // Certifique-se de que o caminho está correto
import './LivroForm.css';

const LivroForm = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [editora, setEditora] = useState('Alta Books');
  const [autores, setAutores] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const controleLivros = new ControleLivros();
    const novoLivro = {
      titulo,
      resumo,
      editora,
      autores: autores.split('\n')
    };
    controleLivros.adicionar(novoLivro);
    // Redirecionar ou limpar o formulário após a adição
  };

  return (
    <div className="container">
      <h1>Dados do Livro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            id="editora"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
            required
          >
            <option value="Alta Books">Alta Books</option>
            <option value="Pearson">Pearson</option>
            <option value="Addison Wesley">Addison Wesley</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (1 por linha)</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-salvar">Salvar Dados</button>
      </form>
    </div>
  );
};

export default LivroForm;
