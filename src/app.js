console.log('App.js is running')

const appRoot = document.getElementById('app')

const app = {
  title: 'Indecision App',
  subtitle: 'Helping people make decisions one at a time',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeAllOptions = () => {
  app.options.length = 0
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ (app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
      <p>{app.options.length}</p>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button type='submit'>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
