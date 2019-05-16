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

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: ITasks) => (
      <div key={task.id}>
        <span>{task.value}</span>
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