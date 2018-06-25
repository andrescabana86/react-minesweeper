import React from 'react';
import { faQuestion, faFlag, faBomb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CELL_STATUSES, CELL_TYPES } from '../constants';

import './cell.css';

export const Cell:React.SFC<any> = (props:any) => {
  const { type, status, value } = props.cell;
  const icon = defineIcon(type, status, value);
  const stylish = defineStyle(type, status, value);

  return (
    <div className={stylish}
      onClick={() => props.revealCell(props.cell)}>
      { icon }
    </div>
  );
};

function defineStyle(type:string, status:string, value:number) {
  const classes: string[] = ['cell__container'];
  if (status === CELL_STATUSES.revealed) {
    if (type === CELL_TYPES.bomb || type === CELL_TYPES.flag) {
      classes.push('cell--danger');
    } else if (type === CELL_TYPES.number) {
      if (value === 1) {
        classes.push('cell--number-advice');
      } else if (value === 2) {
        classes.push('cell--number-warning');
      } else if (value > 2) {
        classes.push('cell--number-danger');
      }
    }
  }
  return classes.join(' ');
}

function defineIcon(type:string, status:string, value:number) {
  let icon = null;
  if (status === CELL_STATUSES.revealed) {
    if (type === CELL_TYPES.bomb) {
      icon = <FontAwesomeIcon icon={faBomb} size="xs"/>;
    } else if (type === CELL_TYPES.flag) {
      icon = <FontAwesomeIcon icon={faFlag} size="xs"/>;
    } else if (type === CELL_TYPES.space) {
      icon = '-';
    } else if (type === CELL_TYPES.number) {
      icon = value;
    }
  } else {
    icon = <FontAwesomeIcon icon={faQuestion} size="xs"/>;
  }
  return icon;
}
