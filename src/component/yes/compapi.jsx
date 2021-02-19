import React from 'react';


{/* This setState() method of Component Api   */}
class Compapi extends React.Component {
    constructor(props) {
        super(props);
          
        this.state = {
           data: []
        }
      
        this.setStateHandler = this.setStateHandler.bind(this);
     };
     setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
     };
     
     render() {
        return (
           <div>
              <button onClick = {this.setStateHandler}>SET STATE</button>
              <h4>State Array: {this.state.data}</h4>
              <Headerthree />
           </div>
        );
     }
  }
  class Headerthree extends React.Component {
    constructor(props) {               {/*DidMount() function jo hai wo execute hota first
                                         render only agar tum output mai dekho to phly favoritecolor
                                        red hoga aek sec k baad yellow hojayega agar tum DidMount() ko render k andar likhoge to
                                        wo error dedega   */}
        super(props);
        this.state = {favoritecolor: "Count on 2 to 1"};
      }
      componentDidMount(e) {
        setTimeout(() => {
         
          this.setState({favoritecolor: "BOOM "} 
          
          )
        }, 2000) 
        
    
    }
    render() {
    return (
        <>
        
        <h1> {this.state.favoritecolor}</h1>
   
        </>
      );
    }
}

export default Compapi;