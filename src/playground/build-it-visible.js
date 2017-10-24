console.log('App.js is running!')

const appRoot = document.getElementById('app')

const app = {
  title: 'Visibility Toggle',
  details: 'some extensive details here',
  show: false
}

const toggleVisibility = () => {
  // app.show ? app.show = false : app.show = true
  app.show = !app.show
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {app.show ? 'Hide details' : 'Show details'}
      </button>
      {app.show && <p>{app.details}</p>}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
