import * as React from 'react';

class App extends React.Component<{}, {}> {
  handleSubmit(event: any) {
    event.preventDefault(),
    console.log("submit")
  }

  render() {
    return (
      <div>
        <h1>React Typescript Todo List</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Type new Task"/>
          <button type="submit">Add Tasks</button>
        </form>
      </div>
    )
  }
}

export default App;