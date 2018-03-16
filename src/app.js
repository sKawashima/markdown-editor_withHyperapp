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
    <textarea id='editor' oninput={e => actions.setInput(document.getElementById('editor').value)} />
    <div innerHTML={state.input}></div>
  </main>
)

app(state, actions, view, document.body)
// <textarea id='editor' onclick={e => addTodo(document.querySelector('#todo-val').value)
