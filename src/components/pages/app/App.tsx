import SideNav from '../../templates/sideNav/SideNav';
import Main from '../../templates/taskTemplate/TaskTemplate';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <SideNav className={style['side-nav']} />
      <Main className={style.main} />
    </div>
  );
}

export default App;
