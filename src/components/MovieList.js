import React, {Component} from "react";
import MovieCard from "./MovieCard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadHOC from "./HOC"

class MovieList extends  Component{
    constructor(props) {
        super(props);
        this.state= {
            rating:1
        }
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
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
  
{this.props.movieListArr.map(el =>  <MovieCard el={el}/>) }  
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
            <Button color="primary" onClick={()=>this.props.onAddMovie(this.state)}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
 
    </div>     
)


 }}

 export default  LoadHOC(MovieList);
