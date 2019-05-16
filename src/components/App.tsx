import * as React from 'react';
import { string } from 'prop-types';

interface IAppState {
  currentTask: string,
  tasks: Array<ITasks>
}

interface ITasks {
  id: number,
  value: string,
  completed: boolean
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTask : '',
      tasks : []
    }
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>):void {
    event.preventDefault(),
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: this._thisInMilliseconds(),
          value: this.state.currentTask,
          completed: false
        }
      ],
      currentTask : ''
    })
  }

  public onChange(event: React.FormEvent<HTMLInputElement>):void {
    const currentTask: string = event.currentTarget.value;
    this.setState({ currentTask })
  }

  public deleteTask(index: number):void {
    const newTasks: Array<ITasks> = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks })
  }

  public toggleDone(index:number):void {
    let task: ITasks[] = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const currentTasks: ITasks[] = [...this.state.tasks, ...task];
    this.setState({ tasks: currentTasks })
  }

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: ITasks, index: number) => (
      <div key={task.id} className="tdl-task">
        <span className={task.completed ? "is-completed" : ""}>{task.value}</span>
        <button onClick={this.deleteTask.bind(this,index)}>Delete</button>
        <button onClick={this.toggleDone.bind(this,index)}>{task.completed ? "Undo" : "Done"}</button>
      </div>
    ))
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>React Typescript Todo List</h1>
        <form 
          onSubmit={this.handleSubmit.bind(this)}
          >
          <input 
            className="tdl-input"
            type="text" 
            placeholder="Type new Task"
            value={this.state.currentTask}
            onChange={this.onChange.bind(this)}
          />
          <button type="submit">Add Tasks</button>
        </form>
        <section>{this.renderTasks()}</section>
      </div>
    )
  }

  private _thisInMilliseconds():number {
    const date: Date = new Date();
    return date.getTime();
  }
}

export default App;