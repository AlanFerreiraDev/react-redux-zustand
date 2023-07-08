import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo, TodoList } from './components'
import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}
