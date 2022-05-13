# FujiFlix

<img src="./src/assets/post.gif" alt="Um gif apresentando o projeto">

>  Um site de Filmaria que apresenta alguns filmes!!!

Confira a aplicação: https://fujiflix.netlify.app

## :page_facing_up: Explicação

O usuário acessa a Home e tem uma lista de filmes que podem ser acessados ​​individualmente após clicar no botão 'Acessar'. O visitante será redirecionado para a página 'Filme', com a sinopse, imagem e nome do filme escolhido. O usuário após acessar um filme pode salvá-lo em sua lista de favoritos. Para ver sua lista de favoritos, basta acessar o Cabeçalho, clicando na seção 'Favoritos', onde o usuário pode deletar o filme e ver detalhes.

O App foi desenvolvido com React, utilizando componentes, rotas e páginas. O cabeçalho foi projetado como um componente fixo em todas as páginas. A lista de filmes vem depois que uma API 'Subject Programmer' é consumida pelo Axios e listada com o gancho useEffect assim que a página é iniciada ou recarregada. O usuário após acessar um filme individualmente é redirecionado para outra rota, essas rotas e links foram introduzidos com o React Router Dom. Após o usuário ter marcado o filme, ele terá um novo array introduzido em seu LocalStorage, onde todos os filmes que ele marcou são armazenados. Eu também usei uma biblioteca chamada React Toastify para melhor desempenho e estilo de 'alerta'.

## :rocket: Tecnologias ##

No projeto foram utilizadas as seguintes tecnologias:

- [ReactJs](https://pt-br.reactjs.org)  
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Axios](https://axios-http.com/docs/intro) 
- [API](https://developers.themoviedb.org/3/getting-started/introduction)    
- [Toastify](https://fkhadra.github.io/react-toastify/introduction) 

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="160px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

&#xa0;

<a href="#top">Volte para o topo</a>
