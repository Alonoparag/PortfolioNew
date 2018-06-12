import React, {Component} from 'react';
import CreateNewPost from './NewPost/CreateNewPost';
import './AdminView.css';

class AdminView extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section id="#admin">
        <div className = "check">
          <h1>I'm just a test</h1>
          <p>
            Don't mind me, lorem ipsum and shizzles
          </p>
        </div>
        {/* <CreateNewPost/> */}
      </section>
    );
  }
}

export default AdminView;
