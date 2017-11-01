console.log('App.js is running')

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

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        {
          app.options.map((opt) => {
            return <li key={opt}>{opt}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button type='submit'>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
