import './App.css';

import React, { Component } from 'react';

class App extends React.Component{  
  constructor(props){
    super(props);
      this.state = {
         list : [] , 
         text:'',
         text2:''
        };
    }
  
    handleChange = e => {
      const {text} = this.state;
      console.log(text);
      this.setState({
          text: e.target.value
        });
      }

      handleSubmit = e =>{
        e.preventDefault();
        const newItem = this.state.text;
        console.log(newItem);
        if(newItem!==""){
          const newItems = [...this.state.list, newItem];
          this.setState({
            list : newItems,
            text:''
          })
        }
      }

      removeItem = index =>{
        index.preventDefault();
        console.log ("I am in item to remove");
        let newList=this.state.list.splice(this.state.list.indexOf(index), 1);
      //  let newList = data.filter((item) => item.name !== i);
        console.log(newList);
        this.setState({list:newList})
      }

  render(){
    const {text,list} = this.state;
    const listItems = list;
    console.log('1',listItems);
  return (
    <div className = "main_div">
      <div className = "middle_div">
        <br />
        <h1>Todo List </h1><br />
        {/* <Todo list List={this.state.list}/> */}
        <input type ="text" onChange={this.handleChange} value={text}/>
        <button onClick={this.handleSubmit}> + </button>
        <ol>
        {listItems.map((list,index) => (
          <li 
              key={index} 
              id={1}>{list} 
              <button onClick={this.removeItem.bind(this.index)}> X </button>
          </li>
        ))}
        </ol>
      </div>
    </div>
  
  );
}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//       </header>
//     </div>
//   );
// }

export default App;
