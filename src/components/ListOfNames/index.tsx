import React, { FC } from "react";
import { ListNames, StylishNames } from "./styles";
import { ListOfNamesProps } from "./interfaces";

const ListOfNames: FC<ListOfNamesProps> = ({ list }) => {
  return (
    <ListNames>
      <h5>Random List of Names</h5>
     {list.length>0 && list.map((name:String,index:number)=> <StylishNames key={index}><div></div><h5>{name}</h5></StylishNames>)}
    </ListNames>
  );
};

export default ListOfNames;