import { h, app } from 'hyperapp' // eslint-disable-line
import marked from 'marked'
import './style.sass'
import highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

marked.setOptions({
  highlight: function (code, lang) {
    return highlight.highlightAuto(code, [lang]).value
  }
})

const state = {
  'input': '# markdown',
  'output': ''
}

const actions = {
  setOutput: (input) => state => ({ output: marked(input) })
}

const view = (state, actions) => (
  <main id='app'>
    <textarea id='editor' oninput={e => actions.setOutput(document.getElementById('editor').value)} placeholder={state.input} />
    <div id='preview' innerHTML={state.output}></div>
  </main>
)

app(state, actions, view, document.body)
