import React, { Component } from 'react';
import MovieList from "./components/MovieList.js";
import Header from "./components/Header.js";


const movieData =[
  {rating:"3",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg",title:"Avatar"},
  {rating:"5",poster:"https://biblioteca.acropolis.org/wp-content/uploads/2015/03/Gladiator.jpg",title:"Gladiator"},
  {rating:"2",poster:"https://images-na.ssl-images-amazon.com/images/I/7151Qmxd3pL._SY679_.jpg",title:"The Mummy"},
  {rating:"3",poster:"https://images-na.ssl-images-amazon.com/images/I/51AdBHBnuQL.jpg",title:"The Purge"},
  {rating:"4",poster:"https://images-na.ssl-images-amazon.com/images/I/51J2bFB4AcL.jpg",title:"Titanic"},
  {rating:"1",poster:"http://cdn.collider.com/wp-content/uploads/the-iron-lady-movie-poster-01.jpg",title:"The iron lady"}

]



class App extends Component {
  state ={
      titleSearch:"",
      minRatingFilter:"1",
      movies: []
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        movies : movieData
      })
    }
    , 3500)
  }

  onAddMovies = (newMovie) => {
    this.setState({
      movies:this.state.movies.concat(newMovie)
    })
  }
 


  render() {
    return (
      <div className="App">
        <Header TitleFilterChange ={(search) => {
                                            this.setState({
                                            titleSearch:search})}} 
                clickRate ={(star) =>{
                  this.setState ({
                    minRatingFilter:star
                  })
                }}
                val={this.state.titleSearch}
                count={this.state.minRatingFilter}/>
        <MovieList onAddMovie={this.onAddMovies} movieListArr={this.state.movies.filter(x=>x.title.toLowerCase().includes(this.state.titleSearch.toLowerCase())).filter(e=> e.rating>=this.state.minRatingFilter)}/>
      </div>
    );
  }
}

export default App;
