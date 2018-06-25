import React from 'react';
import { Cell } from './cell';

export const Row:React.SFC<any> = (props:any) => {
  return (
    <div className="row__container">
      {
        props.children.map((cell:any, idx:number) =>
          <Cell key={idx}
            cell={cell}
            revealCell={props.revealCell}
            flagCell={props.flagCell} />)
      }
    </div>
  );
};
