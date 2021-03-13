import style from './taskCard.module.scss';

interface Prop {
  title: string;
}

const render = (prop: Prop) => (
  <div className={style.taskCard}>
    <p className={style.title}>{prop.title}</p>
  </div>
);
export default render;
