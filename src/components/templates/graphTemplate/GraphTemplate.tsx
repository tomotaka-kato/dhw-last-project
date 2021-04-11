import 'date-fns';
import { Bar } from 'react-chartjs-2';
import style from './graphTemplate.module.scss';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import * as graphDataFirstBuilder from 'services/GraphDataBuilderFirst';
import * as graphDataSecondBuilder from 'services/GraphDataBuilderSecond';
import * as graphDataThirdBuilder from 'services/GraphDataBuilderThird';
import * as graphDataForthBuilder from 'services/GraphDataBuilderForth';
import * as graphDataFifthBuilder from 'services/GraphDataBuilderFifth';
import { getProjects, getLabels, getTasks } from 'repositories/MockData';

import Chip from '@material-ui/core/Chip';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

import React from 'react';

interface Prop {
  className: string;
}

// プロジェクト一覧
const projects = getProjects();
// ラベル一覧
const labels = getLabels();

// グラフ種類
const graphType = [
  { id: '1', text: '月毎' },
  { id: '2', text: 'ラベル毎' },
  { id: '3', text: 'タスク毎' },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 300,
      // height: 50,
      // maxHeight: 100,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      color: 'white',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(list: any[], id: string, theme: Theme) {
  return {
    fontWeight:
      list.map((l: any) => l.id).indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Render = (prop: Prop) => {
  const classes = useStyles();
  const theme = useTheme();

  // プロジェクト選択
  const [projectIds, setProjectIds] = React.useState<string[]>([]);
  const handleProjectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setProjectIds(event.target.value as string[]);
  };

  // ラベル選択
  const [labelIds, setLabelIds] = React.useState<string[]>([]);
  const handleLabelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLabelIds(event.target.value as string[]);
  };

  // 日付選択
  const [fromDate, setFromDate] = React.useState<Date | null>(
    new Date('2020-04-01')
  );
  const handleFromDateChange = (date: Date | null) => {
    setFromDate(date);
  };
  const [toDate, setToDate] = React.useState<Date | null>(
    new Date('2021-03-31')
  );
  const handleToDateChange = (date: Date | null) => {
    setToDate(date);
  };

  // グラフ種類
  const [graphTypeId, setGraphTypeId] = React.useState<string>('1');
  const handleGraphTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setGraphTypeId(event.target.value as string);
  };

  let graphData;
  let graphOption;

  // 表示するグラフデータを変更
  if (toDate?.getMonth() === 7) {
    graphOption = graphDataFifthBuilder.buildOption();
    graphData = graphDataFifthBuilder.buildData();
  } else if (graphTypeId === '2') {
    graphOption = graphDataForthBuilder.buildOption();
    graphData = graphDataForthBuilder.buildData();
  } else if (toDate?.getMonth() === 5) {
    graphOption = graphDataThirdBuilder.buildOption();
    graphData = graphDataThirdBuilder.buildData();
  } else if (projectIds.length > 0) {
    graphOption = graphDataSecondBuilder.buildOption();
    graphData = graphDataSecondBuilder.buildData();
  } else {
    graphOption = graphDataFirstBuilder.buildOption();
    graphData = graphDataFirstBuilder.buildData();
  }

  return (
    <main className={prop.className + ' ' + style.main}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="label-mutiple-chip-graphType">グラフ種類</InputLabel>
          <Select
            labelId="label-mutiple-chip-graphType"
            id="label-mutiple-chip-graphType"
            value={graphTypeId}
            onChange={handleGraphTypeChange}
            input={<Input id="select-multiple-chip-graphType" />}
            MenuProps={MenuProps}
          >
            {graphType.map((g) => (
              <MenuItem
                key={g.id}
                value={g.id}
                style={getStyles(graphType, g.id, theme)}
              >
                {g.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={style.formArea}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">プロジェクト名</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={projectIds}
            onChange={handleProjectChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={projects.filter((p) => p.id === value)[0].name}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {projects.map((project) => (
              <MenuItem
                key={project.id}
                value={project.id}
                style={getStyles(projects, project.id, theme)}
              >
                {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="label-mutiple-chip-label">ラベル</InputLabel>
          <Select
            labelId="label-mutiple-chip-label"
            id="label-mutiple-chip-label"
            multiple
            value={labelIds}
            onChange={handleLabelChange}
            input={<Input id="select-multiple-chip-label" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={labels.filter((l) => l.id === value)[0].name}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {labels.map((label) => (
              <MenuItem
                key={label.id}
                value={label.id}
                style={getStyles(labels, label.id, theme)}
              >
                {label.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="fromdate-picker-dialog"
            label="From"
            format="yyyy/MM/dd"
            value={fromDate}
            onChange={handleFromDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <span>　　</span>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="fromdate-picker-dialog"
            label="To"
            format="yyyy/MM/dd"
            value={toDate}
            onChange={handleToDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>

      <div className={style.graphArea}>
        <Bar data={graphData} options={graphOption} />
      </div>
    </main>
  );
};

export default Render;
