import { cleanup } from '@testing-library/react';
import React from 'react'
import './App.css'

class App extends React.Component{

  constructor (props){
    
    super(props);
      this.state={
      fullname: <h1>Akrmi Rabeh</h1>,
      bio:<p>I can say that applying to create a Web Site has been the best decision , I have ever made in my life.I love to learn new technologies and flex my creativity to create amazing things. </p>,
      profession:<h2>Full Stack JavaScript </h2>,
      visible: false ,
      intervall: null ,
      timer: 0 ,
      };
    }
  componentDidMount(){
    
    this.setState({
      intervall : setInterval(() => {
        this.setState({timer: this.state.timer + 1 }) ;
        
      }, 1000) ,
    });
    
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()") ;

  }
  componentWillUnmount(){
  
    clearInterval(this.state.timer);

  }
  togglevisiblity = () => {
    this.setState({
      visible : !this.state.visible,
    })
  }
  


  render(){
  
    return(
      <div>
        <div className="para">
          <h3>If you are interested in my profile click ON</h3>
        </div>
          {this.state.visible && (
            <div>
                <div>
                  <img src='/john doe.jpg'></img>
                </div>
              {this.state.fullname}
              {this.state.bio}
              {this.state.profession}
              <h2>{this.state.timer}</h2>
            </div>
          )
          }
          
          <br />
          <br />
            <button onClick={this.togglevisiblity}>
          {this.state.visible ? "OFF" : "ON"} 
        </button>
      </div>
    )
    
  }
}
export default App ;