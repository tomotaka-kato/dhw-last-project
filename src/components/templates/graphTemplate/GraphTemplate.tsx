import { Bar } from 'react-chartjs-2';
import style from './graphTemplate.module.scss';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { buildGraphData, buildGraphOption } from 'services/GraphDataBuilder';
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

const graphData = buildGraphData();

/** グラフオプション */
const graphOption = buildGraphOption();

// プロジェクト一覧
const projects = getProjects();

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

function getStyles(id: string, theme: Theme) {
  return {
    fontWeight:
      projects.map((project) => project.id).indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Render = (prop: Prop) => {
  const classes = useStyles();
  const theme = useTheme();

  const [projectIds, setProjectIds] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProjectIds(event.target.value as string[]);
  };

  return (
    <main className={prop.className + ' ' + style.main}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">プロジェクト名</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={projectIds}
          onChange={handleChange}
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
              style={getStyles(project.id, theme)}
            >
              {project.name}
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
