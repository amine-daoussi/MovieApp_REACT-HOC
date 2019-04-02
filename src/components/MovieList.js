import React, {Component} from "react";
import MovieCard from "./MovieCard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import addMovie from "../actions/addMovieAction"
import {connect} from "react-redux"


const mapStateToProps=(state)=>{
return{ movieList : state}
 
}


class MovieList extends  Component{
    constructor(props) {
        super(props);
        this.state= {
            
            // rating:1
        }
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
     
         onAddMovies = () => {
           const movies = this.state;
           
       this.props.addMovie(movies)

       this.setState({modal: false})
    
  }
       
 
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      handleInput =e=>{
        this.setState({
            [e.target.name]:e.target.value
          })
      }
          render(){
            
 return   (    <div class="movieList"> 
  
{this.props.movieList.map(el =>  <div>
  <MovieCard el={el}/>
  
  </div>) }  
        <Button color="danger" onClick={this.toggle} className="add">+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a movie:</ModalHeader>
          <ModalBody>
              <div className='form'>
              <div className="line">
              <span className="label">Title:</span>
           <input className="txt" type="text" name="title" onChange={this.handleInput}/>
           </div>
           <div className="line">
           <span className="label">Rate:</span>
           <input className="txt" type="text" name="rating" onChange={this.handleInput}/>
           
           </div>
           <div className="line">
           <span className="label">Url:</span>
           <input className="txt" type="text" name="poster" onChange={this.handleInput}/>
           
           </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onAddMovies}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
 
    </div>     
)


 }}
const ConnectedMovieList = connect (mapStateToProps,{addMovie})(MovieList)
export default  ConnectedMovieList;
