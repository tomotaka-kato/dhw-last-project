import SideNav from '../../templates/sideNav/SideNav';
import TaskTemplate from '../../templates/taskTemplate/TaskTemplate';
import GraphTemplate from 'components/templates/graphTemplate/GraphTemplate';
import style from './App.module.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
