import React from 'react';
import {Icon} from 'semantic-ui-react';

export default function TableDetails(props) {
  const dataValue = props.dataValue;
    switch (dataValue) {
    case 'PADDOCK':
            return <Icon name='blue circle outline' size='large'/>
    case 'FUEL TANKS':
            return <Icon name='green circle' size='large'/>
    case 'SILOS':
            return <Icon name='blue circle'size='large'/>
    
     default:
         return( <></>  ) ;
    }
}
