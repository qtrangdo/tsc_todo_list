import * as React from 'react';
import { string } from 'prop-types';

interface IAppState {
  currentTask: string,
  tasks: Array<string>
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
        this.state.currentTask
      ],
      currentTask : ''
    })
  }

  public onChange(event: React.FormEvent<HTMLInputElement>):void {
    const currentTask = event.currentTarget.value;
    this.setState({ currentTask })
  }

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: string, index: number) => (
      <div key={index}>{task}</div>
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
}

export default App;