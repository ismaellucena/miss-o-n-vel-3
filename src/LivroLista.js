import React from 'react';
import { ControleLivros } from './controle/ControleLivros';
import './LivroLista.css';

class LivroLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livros: []
    };
  }

  componentDidMount() {
    const controleLivros = new ControleLivros();
    const livros = controleLivros.obterTodos();
    this.setState({ livros });
  }

  handleExcluir = (codigo) => {
    const controleLivros = new ControleLivros();
    controleLivros.excluir(codigo);
    const livros = controleLivros.obterTodos();
    this.setState({ livros });
  };

  render() {
    return (
      <div className="container">
        <h1>Catálogo de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.livros.map(livro => (
              <tr key={livro.codigo}>
                <td>{livro.titulo}</td>
                <td>{livro.resumo}</td>
                <td>{livro.editora}</td>
                <td>
                  <ul>
                    {livro.autores.map(autor => (
                      <li key={autor}>{autor}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button onClick={() => this.handleExcluir(livro.codigo)} className="btn-excluir">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LivroLista;
