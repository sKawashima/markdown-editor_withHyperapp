import { h, app } from 'hyperapp' // eslint-disable-line

const state = {
  'input': 'hello world',
  'output': ''
}

const actions = {
  setInput: (input) => state => ({ input: input })
}

const view = (state, actions) => (
  <main>
    <h1>{state.input}</h1>
    <textarea id='editor' oninput={e => actions.setInput(document.getElementById('editor').value)} />
  </main>
)

app(state, actions, view, document.body)
// <textarea id='editor' onclick={e => addTodo(document.querySelector('#todo-val').value)
