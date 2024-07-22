import { Livro } from '../modelo/Livro';

export class ControleLivros {
  private livros: Livro[] = [
    {
      codigo: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      editora: 'Alta Books',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      codigo: 2,
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      editora: 'Pearson',
      autores: ['Paul Deitel', 'Harvey Deitel']
    },
    {
      codigo: 3,
      titulo: 'Core Java for the Impatient',
      resumo: 'eaders familiar with Horstmann\'s original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.',
      editora: 'Addison Wesley',
      autores: ['Cay Horstmann']
    }
  ];

  obterTodos() {
    return this.livros;
  }

  excluir(codigo: number) {
    this.livros = this.livros.filter(livro => livro.codigo !== codigo);
  }
}
