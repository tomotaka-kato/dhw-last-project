import style from './taskCard.module.scss';
import Label from '../../molecules/label/Label';
import { ILabel } from 'repositories/MockData';

interface Prop {
  title: string;
  labels: ILabel[];
}

const render = (prop: Prop) => (
  <div className={style.taskCard}>
    <p className={style.title}>{prop.title}</p>
    <div className={style.labelArea}>
      {prop.labels.map((label) => (
        <Label key={label.id} text={label.name} color={label.color} />
      ))}
    </div>
  </div>
);
export default render;
