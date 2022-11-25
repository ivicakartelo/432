import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Counter />
              </>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
