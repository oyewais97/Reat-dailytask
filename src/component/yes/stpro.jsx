import React from 'react'

{/*  here we are passing data in state from Props     */}

class StatePro extends React.Component{
    constructor(){
        super();
        this.state={
            header : "i am header from props and state",
            content : "hi i am content"
        }



    }

      render(){
          return(
              <div>
                  <Headerone headPro={this.state.header}/>
                  <Contentone contentPro={this.state.content}/>
              </div>

          );
      }
    
}
class Headerone extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headPro}</h1>
            </div>
        );
    }
}
class Contentone extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.contentPro}</h1>
            </div>
        );
    }
}





export default StatePro;