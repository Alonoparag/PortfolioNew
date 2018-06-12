import React, {Component} from 'react'
import './CreateNewPost.css'

class CreateNewPost extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section id = "newpost" >
        <form action = "localhost:3001/blog/admin" method = "POST">
          <fieldset>
            <input type = "text" name = "title" placeholder = "Title" onKeyPress = {this.handleKey}/>
            <input type = "text" name = "author" placeholder = "author" onKeyPress = {this.handleKey}/>
            <textarea name = "body" onKeyPress = {this.handleKey}/>
            <button name = "submit"/>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default CreateNewPost;
