import React, { Component } from 'react'
export default class Todo extends Component {
    constructor(){
        super()
        this.state = {
            tasks: [],
            currentTask:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            currentTask: e.target.value
        })
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task: this.state.currentTask, id:this.state.tasks.length}],
            currentTask:""
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj)=>{
                return taskObj.id!==id
        })
        this.setState({
            tasks:[...narr]
        })
    }
    render() {
        return (
            <div id='content'>
                <input type="text" value={this.state.currentTask} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}> Submit </button>
                <ol>
                {
                    this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}
                            <button className='del' onClick={() => this.handleDelete(taskObj.id)}> Delete </button>
                            </p>
                        </li>
                    ))
                }
                </ol>
            </div>
        )
    }
}
