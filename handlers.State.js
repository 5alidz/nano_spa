import init_diff from './internal.init_diff'
import {is_noop} from './internal.utils'

export default function stateful_handler(component, to_dom) {
  let state = component.props.state
  let dom_node = undefined

  const render = component.props.render
  const diff = init_diff(to_dom)

  const setState = (new_state) => {
    const _new = typeof new_state == 'function' ? new_state(state) : new_state
    if(is_noop(_new, state)) { return }
    state = _new
    diff(render(state, setState), dom_node)
  }

  dom_node = to_dom(render(state, setState))
  return dom_node
}