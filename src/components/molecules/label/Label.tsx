import style from './label.module.scss';
import TagIcon from 'components/atoms/tagIcon/TagIcon';

interface Prop {
  text: string;
  color: string;
}

const render = (prop: Prop) => (
  <p className={style.label} style={{ border: `1px solid ${prop.color}` }}>
    <TagIcon color={prop.color} />
    <span>{prop.text}</span>
  </p>
);

export default render;
