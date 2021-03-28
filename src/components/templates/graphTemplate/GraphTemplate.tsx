import { Bar } from 'react-chartjs-2';
import style from './graphTemplate.module.scss';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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

const graphData = {
  labels: [
    // 軸ラベル
    // 各ラベルを配列にすることで軸ラベルが改行されて表示される
    ['2019年', '1月'],
    ['2019年', '2月'],
    ['2019年', '3月'],
    ['2019年', '4月'],
    ['2019年', '5月'],
    ['2019年', '6月'],
    ['2019年', '7月'],
    ['2019年', '8月'],
    ['2019年', '9月'],
    ['2019年', '10月'],
    ['2019年', '11月'],
    ['2019年', '12月'],
  ],
  datasets: [
    // 表示するデータセット
    {
      data: [
        16,
        42,
        117.5,
        90.5,
        120.5,
        225,
        193,
        110,
        197,
        529.5,
        156.5,
        76.5,
      ],
      backgroundColor: 'rgba(30, 144, 255, 1)', // <--追加
      label: '予定',
    },
    {
      data: [
        118,
        144,
        219.5,
        92.105,
        122.105,
        327,
        295,
        212,
        299,
        631.5,
        258.5,
        178.5,
      ],
      backgroundColor: 'rgba(255, 144, 30, 1)', // <--追加
      label: '実績',
    },
  ],
};

/** グラフオプション */
const graphOption = {
  scales: {
    xAxes: [
      // x軸設定
      {
        scaleLabel: {
          // 軸ラベル設定
          display: true,
          labelString: '2019年',
        },
      },
    ],
    yAxes: [
      // y軸設定
      {
        scaleLabel: {
          display: true,
          labelString: '合計降水量(mm)',
        },
      },
    ],
  },
};

// プロジェクト一覧
const projectNames = [
  'プロジェクト1',
  'プロジェクト2',
  'プロジェクト3',
  'プロジェクト4',
  'プロジェクト5',
  'プロジェクト6',
  'プロジェクト7',
  'プロジェクト8',
  'プロジェクト9',
  'プロジェクト10',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 300,
      height: 250,
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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Render = (prop: Prop) => {
  const classes = useStyles();
  const theme = useTheme();

  const [projectName, setProjectName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProjectName(event.target.value as string[]);
  };

  return (
    <main className={prop.className + ' ' + style.main}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">プロジェクト名</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={projectName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {projectNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, projectName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={style.graphArea}>
        <Bar data={graphData} options={graphOption} />
      </div>
    </main>
  );
};

export default Render;
