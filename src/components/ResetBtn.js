import React from 'react';
import {Button} from 'semantic-ui-react';

const ResetBtn = (props) => {

    return  <Button  type="button" basic onClick={props.reset}>Reset</Button>

}


export default ResetBtn;
