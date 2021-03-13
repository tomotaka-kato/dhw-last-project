import React from 'react';
import style from './taskTemplate.module.scss';

interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <main className={prop.className + ' ' + style.main}>
    <p>プロジェクトE</p>
    <div className={style.taskArea}>
      <div className={style.board}>未着手</div>
      <div className={style.board}>処理中</div>
      <div className={style.board}>完了</div>
    </div>
  </main>
);

export default render;
