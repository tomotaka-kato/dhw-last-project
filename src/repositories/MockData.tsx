import moment, { Moment } from 'moment';

export enum TaskStatus {
  ToDo,
  Processing,
  Complete,
}

export interface ITask {
  id: string;
  name: string;
  plan: number;
  actual: number;
  completeAt: Moment;
  status: TaskStatus;
}

export const getMockData = (): ITask[] => [
  {
    id: '1',
    name: 'タスク1',
    plan: 8,
    actual: 10,
    completeAt: moment('2020/05/01'),
    status: TaskStatus.Complete,
  },
];
