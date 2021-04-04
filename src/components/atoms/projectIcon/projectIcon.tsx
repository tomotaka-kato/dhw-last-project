import style from './projectIcon.module.scss';
interface Prop {
  color: string;
}

const render = (prop: Prop) => {
  return (
    <svg
      className={style.svg}
      width="100%"
      height="100%"
      viewBox="0 0 19 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      // xmlnsSerif="http://www.serif.com/"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(1,0,0,1,-32,-123)">
        <g transform="matrix(1,0,0,1,0,-42.5222)">
          <g transform="matrix(0.572836,0,0,0.610368,-153.942,-66.8069)">
            <path
              d="M328.431,385.648C327.135,385.705 326.116,386.708 326.116,387.925C326.116,391.009 326.116,396.625 326.116,399.765C326.116,401.023 327.203,402.044 328.544,402.044C334.277,402.044 348.599,402.044 354.332,402.044C355.674,402.044 356.761,401.023 356.761,399.765C356.761,395.858 356.761,387.929 356.761,384.023C356.761,382.764 355.674,381.744 354.332,381.744C351.865,381.744 348.186,381.744 346.59,381.744C346.079,381.744 345.581,381.895 345.167,382.176C344.201,382.832 342.379,384.069 341.443,384.704C341.061,384.964 340.605,385.113 340.134,385.134C338.028,385.227 331.838,385.499 328.431,385.648Z"
              style={{
                fill: prop.color,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default render;
