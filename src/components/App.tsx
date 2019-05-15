import * as React from 'react';

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

  handleSubmit(event: any):void {
    event.preventDefault(),
    this.setState({
      tasks: [
        ...this.state.tasks,
        this.state.currentTask
      ],
      currentTask : ''
    })
  }

  onChange(event: any):void {
    const currentTask = event.target.value;
    this.setState({ currentTask })
  }

  render() {
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
      </div>
    )
  }
}

export default App;