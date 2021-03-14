import tagIcon from 'assets/icon_tag.svg';
import style from './tagIcon.module.scss';

interface Prop {
  color: string;
}

const render = (prop: Prop) => {
  return (
    <svg
      className={style.svg}
      width="100%"
      height="100%"
      viewBox="0 0 20 13"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      // xmlnsSerif="http://www.serif.com/"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
    >
      <g transform="matrix(1,0,0,1,-309,-187)">
        <g transform="matrix(1,0,0,1,-5.79589,7.47681)">
          <g transform="matrix(0.394935,0,0,0.456203,212.338,-7.93791)">
            <path
              d="M292.687,435.751C291.621,436.82 290.148,437.481 288.521,437.481L267.275,437.481C264.027,437.481 261.391,437.198 261.391,435.073L261.391,416.723C261.391,414.414 264.027,413.945 267.275,413.945L288.521,413.945C290.148,413.945 291.621,414.607 292.687,415.675L305.742,424.266C306.229,424.586 306.523,425.13 306.523,425.713C306.523,426.296 306.229,426.84 305.742,427.16L292.687,435.751ZM290.844,422.151C292.809,422.151 294.405,423.747 294.405,425.713C294.405,427.679 292.809,429.275 290.844,429.275C288.878,429.275 287.282,427.679 287.282,425.713C287.282,423.747 288.878,422.151 290.844,422.151Z"
              style={{
                fill: prop.color,
                stroke: prop.color,
                strokeWidth: '2.34px',
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default render;
