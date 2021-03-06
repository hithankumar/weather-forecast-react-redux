import React, {Component} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function average(data){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return parseInt(data.reduce(reducer) / data.length) ;
}
export default (props) =>{
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
            <div>{average(props.data) }{ (props.units)}</div>
        </div>
    )
}