class VisibilityToggle extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>Some details here</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// -----------------------------------------------------------------
// ---------- first version (pre-Component lessons) below ----------
// -----------------------------------------------------------------
// console.log('App.js is running!')

// const appRoot = document.getElementById('app')

// const app = {
//   title: 'Visibility Toggle',
//   details: 'some extensive details here',
//   show: false
// }

// const toggleVisibility = () => {
//   // app.show ? app.show = false : app.show = true
//   app.show = !app.show
//   renderApp()
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {app.show ? 'Hide details' : 'Show details'}
//       </button>
//       {app.show && <p>{app.details}</p>}
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// renderApp()
