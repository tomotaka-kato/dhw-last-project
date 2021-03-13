import React from 'react';
import style from './sideNav.module.scss';

interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <nav className={prop.className + ' ' + style.sideNav}>
    <h1>アプリ名</h1>

    <p>プロジェクト</p>
    <ul>
      <li>project</li>
      <li>project</li>
      <li>project</li>
      <li>project</li>
      <li>project</li>
    </ul>

    <p>ラベル</p>
    <ul>
      <li>label</li>
      <li>label</li>
      <li>label</li>
      <li>label</li>
      <li>label</li>
    </ul>

    <p>グラフ表示</p>

    <div className={style.userArea}>
      <p>加藤友崇</p>
    </div>
  </nav>
);

export default render;
