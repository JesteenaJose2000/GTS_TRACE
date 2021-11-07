import React, { useState } from 'react';
//import HeaderSection from "../../components/Header/header";
//import Footer from "../../components/Footer/footer";
import FarmTable from './farmTable';
import Farmpopup from './FarmListPopup/farmpopup';
import '../../Pages.css';
import farm from "../../../../Data/farmData";
//import tableData from '../../../Data/tableData.json';
import {Container} from 'semantic-ui-react';

import { Icon, Label, Menu, Table, Modal, Header, Button, Checkbox, Grid  } from 'semantic-ui-react';
//import _ from 'lodash';




export default function Farms() {

  const [selectFarm, setselectFarm] = useState('');

  let options= null;
  function FarmDropdown() {
   
          
              options = farm.map((el) => <option value={el.value} key={el.value}>{el.value}</option>
                        );
          
     if(selectFarm===" ")
     {
      return (<>
                            
        <div class="inputfield">
            <div class="custom_select"> 
            <select >            
            <option>No data available</option>
                </select>
            </div>
        </div>
        </>
        )
     }
     else{
              return (<>
                            
                  <div class="inputfield">
                      <div class="custom_select"> 
                      <select value={selectFarm} onChange={(e) => setselectFarm(e.target.value)}>            
                          {options}
                          </select>
                      </div>
                  </div>
                  </>
                  )
          }
  
  
          
  }
  
  
 
   
  return(

<div  className= "table-size">
    
    <div className= "subheader">  
   
        <h1 style={{"color": "black"}}>Farms </h1><span>&nbsp;&nbsp;</span>
      
      
   {/*--------------------------------------------Add edit delete farm popup----------------------*/}
       <div className="icon-align">
          <Farmpopup/>
      </div>  
      <Grid.Column style={{"margin-left": "10px"}}>
         <FarmDropdown/>
      </Grid.Column>
      <div className="spacer"></div>
    
    </div>
     {/*------------------------------------Farm Tables Paddock, silos, fuel tanks----------------------*/}
    <FarmTable/>
</div>

      );
}


    
 