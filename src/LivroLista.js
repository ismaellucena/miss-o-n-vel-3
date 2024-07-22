import React, { useState, useEffect } from 'react';
import { ControleEditora } from './controle/ControleEditora';
import { ControleLivro } from './controle/ControleLivros';

const controleEditora = new ControleEditora();
const controleLivro = new ControleLivro();

const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  
    return (
      <tr>
        <td>{livro.codigo}</td>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <button onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };
  
  const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
      if (!carregado) {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
      }
    }, [carregado]);
  
    const excluir = (codigo) => {
      controleLivro.excluir(codigo);
      setCarregado(false);
    };
  
    return (
      <main>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Ações</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    );
  };
  
  export default LivroLista;
  