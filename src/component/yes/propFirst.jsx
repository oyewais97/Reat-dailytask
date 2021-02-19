import React from 'react'


class Propsfirstdefaul extends React.Component{
    

    render() {
        return (
           <div>
              <h1>{this.props.headerProp}</h1>
              <h2>{this.props.contentProp}</h2>
           </div>
        );
     }
  }
  Propsfirstdefaul.defaultProps = {
     headerProp: "Header from props...",
     contentProp:"Content from props..."
  }



export default Propsfirstdefaul;