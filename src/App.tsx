import { Home } from './Pages/Home'
import {Provider} from 'react-redux'

import './App.css'
import { store } from './redux/store'

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
