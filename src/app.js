import { h, app } from 'hyperapp' // eslint-disable-line

const state = {
  'input': 'hello world',
  'output': ''
}

const actions = {
}

const view = (state, actions) => (
  <h1>{state.input}</h1>
)

app(state, actions, view, document.body)
