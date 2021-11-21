import React from 'react';
import {Icon} from 'semantic-ui-react';
import PaddockTable from './PaddockTable';

export default function TableDetails(props) {
  const dataValue = props.dataValue;
    switch (dataValue) {
    case 'PADDOCK':
            return <PaddockTable/>
    case 'FUEL TANKS':
            return <Icon name='green circle' size='large'/>
    case 'SILOS':
            return <Icon name='blue circle'size='large'/>
    
     default:
         return( <></>  ) ;
    }
}
