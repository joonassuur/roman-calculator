import React from 'react';
import { Button } from 'semantic-ui-react'

const CalcBtn = (props) => {

    return  <Button onClick={props.calculate}>Calculate</Button>

}

export default CalcBtn;
