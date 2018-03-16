import { h, app } from 'hyperapp' // eslint-disable-line
import marked from 'marked'
import './style.sass'

const state = {
  'input': '# markdown',
  'output': ''
}

const actions = {
  setInput: (input) => state => ({ output: marked(input) })
}

const view = (state, actions) => (
  <main id='app'>
    <textarea id='editor' oninput={e => actions.setInput(document.getElementById('editor').value)} placeholder={state.input} />
    <div id='preview' innerHTML={state.output}></div>
  </main>
)

app(state, actions, view, document.body)
