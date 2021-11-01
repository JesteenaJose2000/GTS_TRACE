import React, { useState } from 'react';
//import HeaderSection from "../../components/Header/header";
//import Footer from "../../components/Footer/footer";
import FarmTable from './farmTable';
import Farmpopup from './FarmListPopup/farmpopup';
import '../../Pages.css';

//import tableData from '../../../Data/tableData.json';
import {Container} from 'semantic-ui-react';

import { Icon, Label, Menu, Table, Modal, Header, Button, Checkbox, Grid  } from 'semantic-ui-react';
//import _ from 'lodash';




export default function Farms() {
  
 
   
  return(

<div  className= "table-size">
    
    <div className= "subheader">  
   
        <h1 style={{"color": "black"}}>Farms </h1><span>&nbsp;&nbsp;</span>
      
      
   {/*--------------------------------------------Add edit delete farm popup----------------------*/}
       <div className="icon-align">
          <Farmpopup/>
      </div>  

      <div className="spacer"></div>
    
    </div>
     {/*------------------------------------Farm Tables Paddock, silos, fuel tanks----------------------*/}
    <FarmTable/>
</div>

      );
}


    
 