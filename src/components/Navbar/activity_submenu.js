import React from "react";
import { Link } from "react-router-dom";

import { VscOpenPreview } from "react-icons/vsc";
import { ImDroplet } from "react-icons/im";
import { SiHappycow } from "react-icons/si";
import { GiGroundSprout,GiPlantWatering,GiFruitTree,GiAutoRepair,GiWheat} from "react-icons/gi";
import "./submenu.css";

export default function activity_submenu(props) {
  let sub_menu_class=!props.compact?"activity-submenu":"activity-submenu-compact";
    return (
    <div className={sub_menu_class}>
      <Link to="/Activityreports" className="link">
        <VscOpenPreview className="icons" />
        <span className="span-expand">Activity Reports</span>
      </Link>

      <Link to="/Spraylogs" className="link">
        <ImDroplet className="icons" />
        <span className="span-expand">Spray Logs</span>
      </Link>

      <Link to="/Planting" className="link">
        <GiGroundSprout className="icons" />
        <span className="span-expand">Planting</span>
      </Link>

      <Link to="/Spreading" className="link">
        <GiWheat className="icons" />
        <span className="span-expand">Spreading</span>
      </Link>

      <Link to="/Harvest" className="link">
        <GiFruitTree className="icons" />
        <span className="span-expand">Harvest</span>
      </Link>

      <Link to="/Maintainance" className="link">
        <GiAutoRepair className="icons" />
        <span className="span-expand">Maintenance</span>
      </Link>

      <Link to="/Irrigation" className="link">
        <GiPlantWatering className="icons" />
        <span className="span-expand">Irrigation</span>
      </Link>

      <Link to="/Grazing" className="link">
        <SiHappycow className="icons" />
        <span className="span-expand">Grazing</span>
      </Link>
    </div>
  );
}
