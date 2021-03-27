import TaskCard from '../../organisms/taskCatd/TaskCard';
import style from './taskTemplate.module.scss';
interface Prop {
  className: string;
}

const render = (prop: Prop) => (
  <main className={prop.className + ' ' + style.main}>
    <p>プロジェクトE</p>
    <div className={style.taskArea}>
      <div className={style.board}>
        <p>未着手</p>
        <TaskCard title="タスク1" />
        <TaskCard title="タスク2" />
        <TaskCard title="タスク3" />
        <TaskCard title="タスク4" />
      </div>

      <div className={style.board}>
        <p>進行中</p>
        <TaskCard title="タスク1" />
        <TaskCard title="タスク2" />
        <TaskCard title="タスク3" />
        <TaskCard title="タスク4" />
      </div>

      <div className={style.board}>
        <p>完了</p>
        <TaskCard title="タスク1" />
        <TaskCard title="タスク2" />
        <TaskCard title="タスク3" />
        <TaskCard title="タスク4" />
      </div>
    </div>
  </main>
);

export default render;
