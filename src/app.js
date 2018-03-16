import { h, app } from 'hyperapp' // eslint-disable-line

const state = {
  'input': 'hello world',
  'output': ''
}

const actions = {
}

const view = (state, actions) => (
  <main>
    <h1>{state.input}</h1>
    <textarea id='editor' oninput={e => console.log(document.getElementById('editor').value)} />
  </main>
)

app(state, actions, view, document.body)
// <textarea id='editor' onclick={e => addTodo(document.querySelector('#todo-val').value)
