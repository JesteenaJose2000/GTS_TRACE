import React from "react";
import "./submenu.css";
import { Link } from "react-router-dom";
import { GiField,GiGoat,GiChemicalDrop,GiGrainBundle,GiFertilizerBag } from "react-icons/gi";
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import {MdVerified} from "react-icons/md"

import {FaTools,FaUsers,FaSprayCan} from "react-icons/fa"
export default function assets_submenu(props) {
  let sub_menu_class=!props.compact?"assets-menu":"assets-menu-compact";
  return (
    <div className={sub_menu_class}>
        <Link to="/Farms" className="link">
          <GiField className="icons" />
          <span className="span-expand">Farms</span>
        </Link>

        <Link to="/" className="link">
          <BsFillCloudLightningRainFill className="icons" />
          <span className="span-expand">Rain</span>
        </Link>

        <Link to="/" className="link">
          <GiGrainBundle className="icons" />
          <span className="span-expand">Cultivars</span>
        </Link>

        <Link to="/" className="link">
          <GiGoat className="icons" />
          <span className="span-expand">Livestock</span>
        </Link>

        <Link to="/Equipments" className="link">
          <FaTools className="icons" />
          <span className="span-expand">Equipments</span>
        </Link>

        <Link to="/Chemicals" className="link">
          <GiChemicalDrop className="icons" />
          <span className="span-expand">Chemicals</span>
        </Link>
        <Link to="/Fertiliser" className="link">
          <GiFertilizerBag className="icons" />
          <span className="span-expand">Fertilisers</span>
        </Link>
        <Link to="/" className="link">
          <FaUsers className="icons" />
          <span className="span-expand">Users</span>
        </Link>
        <Link to="/" className="link">
          <FaSprayCan className="icons" />
          <span className="span-expand">Nozzles</span>
        </Link>
        <Link to="/" className="link">
          <MdVerified className="icons" />
          <span className="span-expand">Water Licences</span>
        </Link>
    </div>
  );
}
