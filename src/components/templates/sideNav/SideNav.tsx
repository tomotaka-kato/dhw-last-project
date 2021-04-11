import style from './sideNav.module.scss';
import TagIcon from 'components/atoms/tagIcon/TagIcon';
import ProjectIcon from 'components/atoms/projectIcon/projectIcon';
import graphIcon from '../../../assets/icon_graph.svg';
import { Link } from 'react-router-dom';
import { getProjects, getLabels } from 'repositories/MockData';

interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <nav className={prop.className + ' ' + style.sideNav}>
    <Link to="/" className={style.link}>
      <h1>kālailai</h1>
    </Link>

    <p className={style.groupTitle}>プロジェクト</p>
    <ul>
      {getProjects().map((project) => (
        <li key={project.id}>
          <ProjectIcon color={project.color} />
          {project.name}
        </li>
      ))}
    </ul>

    <p className={style.groupTitle}>ラベル</p>
    <ul>
      {getLabels().map((label) => (
        <li key={label.id}>
          <TagIcon color={label.color} />
          {label.name}
        </li>
      ))}
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
