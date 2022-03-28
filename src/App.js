import Path from './application/routes';
import Provider from './application/provider';

const App = () => {
  return (
    <Provider>
      <Path />
    </Provider>
  )
}

export default App;