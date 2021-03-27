import style from './sideNav.module.scss';
import projectIcon from '../../../assets/icon_project.svg';
import TagIcon from 'components/atoms/tagIcon/TagIcon';
import graphIcon from '../../../assets/icon_graph.svg';
import { Link } from 'react-router-dom';

interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <nav className={prop.className + ' ' + style.sideNav}>
    <Link to="/" className={style.link}>
      <h1>kālailai</h1>
    </Link>

    <p>プロジェクト</p>
    <ul>
      <li>
        <img width="20" height="13" src={projectIcon} alt="" />
        project
      </li>
      <li>
        <img width="20" height="13" src={projectIcon} alt="" />
        project
      </li>
      <li>
        <img width="20" height="13" src={projectIcon} alt="" />
        project
      </li>
      <li>
        <img width="20" height="13" src={projectIcon} alt="" />
        project
      </li>
      <li>
        <img width="20" height="13" src={projectIcon} alt="" />
        project
      </li>
    </ul>

    <p>ラベル</p>
    <ul>
      <li>
        <TagIcon color="red" />
        label
      </li>
      <li>
        <TagIcon color="blue" />
        label
      </li>
      <li>
        <TagIcon color="green" />
        label
      </li>
      <li>
        <TagIcon color="orange" />
        label
      </li>
      <li>
        <TagIcon color="pink" />
        label
      </li>
    </ul>

    <p className={style.graph}>
      <img width="23" height="23" src={graphIcon} alt="" />
      <Link to="Graph" className={style.link}>
        グラフ表示
      </Link>
    </p>

    <div className={style.userArea}>
      <p>加藤友崇</p>
    </div>
  </nav>
);

export default render;
