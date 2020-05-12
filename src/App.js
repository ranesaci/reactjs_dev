import React, {Component} from 'react';


export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      userName:"Sachin",
      todoItemList:[
        {action: "BUY", status:true},
        {action: "SELL", status:false},
        {action: "HOLD", status:false},
      ],
      nextItemInTodo:""
    }
  }
  
  updateNextItemInTodo=(event)=>{
    this.setState({nextItemInTodo: event.target.value});
  }

  addItemInTodo=()=>{
      if (!this.state.todoItemList.find(item => item.action === this.state.nextItemInTodo) ) {
        
        this.setState({
          todoItemList:[...this.state.todoItemList,{action:this.state.nextItemInTodo, status: false}],
          nextItemInTodo:""
        });
      }
  }
  toggleItemStatus=(item)=> this.setState({
      todoItemList: this.state.todoItemList.map(record => (record.action === item.action) ? {...record, status:!record.status}: record)
    });


  generateToDoItemsTable=()=>this.state.todoItemList.map(item => 
      <tr key={item.action}>
        <td>{item.action}</td>
        <td><input type="checkbox" checked= {item.status} onChange={()=> this.toggleItemStatus(item)}></input></td>
      </tr>
      
      );
  

  render=()=> 
    <div>
        <h1>{this.state.userName}'s TODO List:</h1>
        Show UserName: {this.state.userName}
        <br></br>
        {/* check for todolist items length */}
        Length of pending TODO Items : {this.state.todoItemList.filter(item => item.status != true).length}
        
        {/* update the item action in the todoItemList */}
        <br></br>
        Enter updated name for Action: <input value= {this.state.nextItemInTodo} onChange={this.updateNextItemInTodo}></input>
        <br></br>
        Check current value of nextItemInTodo: {this.state.nextItemInTodo}

         {/* add the item action in the todoItemList */}
        <br></br>
        <button onClick={this.addItemInTodo}>Click to add Item</button>
         {/* generate table of todoItems */}
        <br></br>
        <div>
          <table >
            <thead>
              <tr><th>Action</th> <th>Status</th></tr>
              <tbody>{this.generateToDoItemsTable()}</tbody>
            </thead>
          </table>
        </div>

    </div>
  
}
