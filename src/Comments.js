import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import CreateComments from './create-component'
import Loader from './Loader/Loader'

const Comment = props => (
    <div>
 
   
    <div className='megadiv'> 
    <div className='super'>
      
  <h1 className='hello txt'>{props.comment.username}</h1>
  <h1 className='comment txt'>{props.comment.description}</h1>
  <h3 className='txt date' style={{color: 'white'}}>{props.comment.createdAt.substring(0,10)}</h3>
  <button className='button' href='#' onClick={() => {props.deleteComment(props.comment._id)}}>X</button>
  
  </div>
  
  </div> 
  </div>
)

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.deleteComment = this.deleteComment.bind(this);

    this.state = {
      isLoading: true,
      comments: []};
  }

   componentDidMount() {
     axios.get('/comments/')
    .then (response => {
      this.setState({ isLoading: false, comments: response.data })
      console.log(this.state.comments)
    })
    .catch((error) => {
      console.log(error);
      console.log(this.comments);
    })
  }
 
  deleteComment(id) {
    
    axios.delete('/comments/'+id)
    .then(res => console.log(res.data));
    this.setState({
      comments: this.state.comments.filter(el => el._id !== id)
    })
  }

  commentList() {
    
      
      return this.state.comments.map(currentcomment => {
      return <Comment comment={currentcomment}  deleteComment={this.deleteComment} key={currentcomment._id} />;
    });
    
  }

    render() {
    return (
    
          <React.Fragment>
            
          {this.state.isLoading ? <div className='car'><Loader/></div> : 
          <div className='loader-container'>
         <div className='car'>
           
      
   <div className='space'>
        
        <p>&copy; 2020 Megachel. Все права защищены. </p>
      </div>
         <CreateComments /> 
            {this.commentList( ) }
            
            
            
            <h3 className='qwe'>Оставьте комментарий проекту, регистрация не требуется</h3>
            
       </div>


        </div>
        }
            </React.Fragment>
            
     )
    }
}