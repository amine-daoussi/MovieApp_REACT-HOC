import React, { Component } from 'react';
import MovieList from "./components/MovieList.js";
import Header from "./components/Header.js";


// const movieData =[
//   {rating:"3",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg",title:"Avatar"},
//   {rating:"5",poster:"https://biblioteca.acropolis.org/wp-content/uploads/2015/03/Gladiator.jpg",title:"Gladiator"},
//   {rating:"2",poster:"https://images-na.ssl-images-amazon.com/images/I/7151Qmxd3pL._SY679_.jpg",title:"The Mummy"},
//   {rating:"3",poster:"https://images-na.ssl-images-amazon.com/images/I/51AdBHBnuQL.jpg",title:"The Purge"},
//   {rating:"4",poster:"https://images-na.ssl-images-amazon.com/images/I/51J2bFB4AcL.jpg",title:"Titanic"},
//   {rating:"1",poster:"http://cdn.collider.com/wp-content/uploads/the-iron-lady-movie-poster-01.jpg",title:"The iron lady"}

// ]




class App extends Component {
  // state ={
  //     titleSearch:"",
  //     minRatingFilter:"1",
  //     movies: movieData
  // }
  
 


  render() {
    return (
      <div className="App">
        <Header/>
        <MovieList/>
      </div>
    );
  }
}

export default App;
