import SideNav from '../../templates/sideNav/SideNav';
import TaskTemplate from '../../templates/taskTemplate/TaskTemplate';
import GraphTemplate from 'components/templates/graphTemplate/GraphTemplate';
import style from './App.module.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className={style.App}>
      <Router>
        <SideNav className={style['side-nav']} />
        <Route
          exact
          path="/"
          render={() => <TaskTemplate className={style.main} />}
        />
        <Route
          path="/Graph"
          render={() => <GraphTemplate className={style.main} />}
        />
      </Router>
    </div>
  );
}

export default App;
