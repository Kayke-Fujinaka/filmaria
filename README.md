# FujiFlix

<img src="./src/Assets/post.gif" alt="A gif introducing the project">

> A Filmmaking site that features some movies!!!

Check out the app: https://fujiflix.netlify.app

## :page_facing_up: Explanation

The user accesses Home and has a list of movies that can be accessed individually after clicking on the 'Access' button. The visitor will be redirected to the 'Movie' page, with the synopsis, image and name of the chosen movie. After accessing a movie, the user can save it in his favorites list. To see your list of favorites, just access the Header, clicking on the 'Favorites' section, where the user can delete the movie and see details.

The App was developed with React, using components, routes and pages. The header was designed as a fixed component on every page. The movie list comes after a 'Subject Programmer' API is consumed by Axios and listed with the useEffect hook as soon as the page is started or reloaded. The user after accessing a movie individually is redirected to another route, these routes and links were introduced with the React Router Dom. After the user has tagged the movie, he will have a new array introduced into his LocalStorage, where all the movies he tagged are stored. I also used a library called React Toastify for better performance and 'alert' style.

## :rocket: Technologies ##

The following technologies were used in the project:

- [ReactJs](https://pt-br.reactjs.org)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Axios](https://axios-http.com/docs/intro)
- [API](https://developers.themoviedb.org/3/getting-started/introduction)
- [Toastify](https://fkhadra.github.io/react-toastify/introduction)

## 🤝 Collaborators

Thanks to the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="160px;" alt="Photo by Kayke Fujinaka on GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </all>
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Go back to top</a>
