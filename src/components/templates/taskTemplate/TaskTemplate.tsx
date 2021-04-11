import TaskCard from '../../organisms/taskCatd/TaskCard';
import style from './taskTemplate.module.scss';
import { getLabels } from 'repositories/MockData';

interface Prop {
  className: string;
}

const labels = getLabels();

const render = (prop: Prop) => (
  <main className={prop.className + ' ' + style.main}>
    <p>プロジェクトE</p>
    <div className={style.taskArea}>
      <div className={style.board}>
        <p>未着手</p>
        <TaskCard title="タスク1" labels={[labels[5], labels[0]]} />
        <TaskCard title="タスク2" labels={[labels[5], labels[1]]} />
        <TaskCard title="タスク3" labels={[labels[5], labels[2]]} />
        <TaskCard title="タスク4" labels={[labels[5], labels[3]]} />
      </div>

      <div className={style.board}>
        <p>進行中</p>
        <TaskCard title="タスク1" labels={[labels[5], labels[3], labels[1]]} />
        <TaskCard title="タスク2" labels={[labels[5], labels[3], labels[1]]} />
        <TaskCard title="タスク3" labels={[labels[5], labels[3], labels[1]]} />
        <TaskCard title="タスク4" labels={[labels[5], labels[3], labels[1]]} />
      </div>

      <div className={style.board}>
        <p>完了</p>
        <TaskCard title="タスク1" labels={[labels[5], labels[4], labels[0]]} />
        <TaskCard title="タスク2" labels={[labels[5], labels[4], labels[0]]} />
        <TaskCard title="タスク3" labels={[labels[5], labels[4], labels[1]]} />
        <TaskCard title="タスク4" labels={[labels[5], labels[4], labels[1]]} />
      </div>
    </div>
  </main>
);

export default render;
