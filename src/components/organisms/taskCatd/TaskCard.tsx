import style from './taskCard.module.scss';
import Label from '../../molecules/label/Label';

interface Prop {
  title: string;
}

const render = (prop: Prop) => (
  <div className={style.taskCard}>
    <p className={style.title}>{prop.title}</p>
    <div>
      <Label text="ラベル1" color="red" />
    </div>
  </div>
);
export default render;
