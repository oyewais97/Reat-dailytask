import React from 'react';
import { Table } from 'react-bootstrap';



class Firsts extends React.Component {
    constructor() {
        super();
        this.state = {
           data: 
           [
              {
                 "id":1,
                 "name":"Foo",
                 "age":"20"
              },
              {
                 "id":2,
                 "name":"Bar",
                 "age":"30"
              },
              {
                 "id":3,
                 "name":"Baz",
                 "age":"40"
              }
           ]
        }
     }
    
    render() {
       let i = 3;
       return (
          <div>
             <h1>Header</h1>
             <h2>Content</h2>
             <p>This is the content!!!</p>
             <Name />  {/* here we call the class */}
             <ID />
        
          <div>
          <h1>{i == 1 ? 'True!' : 'False'}</h1> {/* ternary condition */}
          <table>
              <tbody>
                  {this.state.data.map((person, a)=> <TableRow key ={a}
                    data = {person} />)
                      
                  }
              </tbody>
          </table>

       </div>
       </div>
       );
    }
 };
{/*  using many component in a single COMPONENT Example below */}
class Name extends React.Component {
    render() {
       return (
          <div>
             <h1>owais</h1>
          </div>
       );
    }
 }
 class ID extends React.Component {
    render() {
       return (
          <div>
             <h2>id</h2>
             <p>97</p>
          </div>
       );
    }
 }
 class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }

 export default Firsts;