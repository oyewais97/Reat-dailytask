import React from 'react'
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 0
       }
       this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
       this.setState({data: this.state.data + 1})
    }
    render() {
       return (
          <div>
             <button onClick = {this.setNewNumber}>INCREMENT</button>
             <Content myNumber = {this.state.data}></Content>
          </div>
       );
    }
 }
 class Content extends React.Component {
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
             <p><Events/></p>
             <p><REF /></p>
          </div>
       );
    }
 }
 class Events extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 'Initial data...'
       }
       this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
       this.setState({data: e.target.value});
    }
    render() {
       return (
          <div>
             <input type = "text" value = {this.state.data} 
                onChange = {this.updateState} />
             <h4>{this.state.data}</h4>
          </div>
       );
    }
 }
 class REF extends React.Component {
    constructor(props) {
       super(props);
         
       this.state = {
          data: ''
       }
       this.updateState = this.updateState.bind(this);
       this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
       this.setState({data: e.target.value});
    }
    clearInput() {
       this.setState({data: ''});
       ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
       return (
          <div>
             <input value = {this.state.data} onChange = {this.updateState} 
                ref = "myInput"></input>
             <button onClick = {this.clearInput}>CLEAR</button>
             <h4>{this.state.data}</h4>
          </div>
       );
    }
 }
 export default Lifecycle;