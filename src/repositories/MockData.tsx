import moment, { Moment } from 'moment';

export enum TaskStatus {
  ToDo,
  Processing,
  Complete,
}

export interface IProject {
  id: string;
  name: string;
  color: string;
}

export interface ITask {
  id: string;
  name: string;
  plan: number;
  actual: number;
  completeAt: string;
  status: TaskStatus;
  labels: string[];
  projectId: string;
}

export interface ILabel {
  id: string;
  name: string;
  color: string;
}

export const getProjects = (): IProject[] => [
  { id: '1', name: 'デジハリ卒業制作', color: 'orange' },
  { id: '2', name: 'すごいプロジェクト', color: 'orange' },
  { id: '3', name: 'かっこいいアプリ開発', color: 'orange' },
  { id: '4', name: 'いけてる何か', color: 'orange' },
  { id: '5', name: 'なんか適当', color: 'orange' },
];

export const getLabels = (): ILabel[] => [
  { id: '1', name: '新規機能開発', color: 'orange' },
  { id: '2', name: 'バグフィックス', color: '#ffaaaa' },
  { id: '3', name: '新人実装', color: 'lightgreen' },
];

export const getTasks = (): ITask[] => [
  {
    id: '1',
    name: 'タスク1',
    plan: 8,
    actual: 10,
    completeAt: '2020/05/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '2',
    name: 'タスク2',
    plan: 9,
    actual: 11,
    completeAt: '2020/05/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '3',
    name: 'タスク3',
    plan: 10,
    actual: 12,
    completeAt: '2020/05/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '4',
    name: 'タスク4',
    plan: 11,
    actual: 13,
    completeAt: '2020/05/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '5',
    name: 'タスク5',
    plan: 12,
    actual: 14,
    completeAt: '2020/05/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '6',
    name: 'タスク6',
    plan: 13,
    actual: 15,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '7',
    name: 'タスク7',
    plan: 14,
    actual: 16,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '8',
    name: 'タスク8',
    plan: 15,
    actual: 17,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '9',
    name: 'タスク9',
    plan: 16,
    actual: 18,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '10',
    name: 'タスク10',
    plan: 17,
    actual: 19,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
  {
    id: '11',
    name: 'タスク11',
    plan: 18,
    actual: 20,
    completeAt: '2020/06/01',
    status: TaskStatus.Complete,
    labels: ['1', '2'],
    projectId: '1',
  },
];
