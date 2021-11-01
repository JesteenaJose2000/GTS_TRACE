
import React from "react";
import { Link } from "react-router-dom";
import { GiChemicalDrop,GiGrain,GiFuelTank,GiFertilizerBag} from "react-icons/gi";
import { VscOpenPreview } from "react-icons/vsc";
import { FaHandHoldingWater } from "react-icons/fa";
import "./submenu.css";

export default function Inventory_submenu(props) {
  let inv_sub_menu_class=!props.compact?"inventory-submenu":"inventory-submenu-compact";
  return (
    <div className={inv_sub_menu_class}>
      <Link to="/" className="link">
        <VscOpenPreview className="icons" />
        <span className="span-expand">Inventory Reports</span>
      </Link>

      <Link to="/" className="link">
        <GiGrain className="icons" />
        <span className="span-expand">Grain</span>
      </Link>

      <Link to="/" className="link">
        <GiChemicalDrop className="icons" />
        <span className="span-expand">Chemical</span>
      </Link>

      <Link to="/" className="link">
        <GiFertilizerBag className="icons" />
        <span className="span-expand">Fertilizer</span>
      </Link>

      <Link to="/" className="link">
        <GiFuelTank className="icons" />
        <span className="span-expand">Fuel</span>
      </Link>

      <Link to="/" className="link">
        <FaHandHoldingWater className="icons" />
        <span className="span-expand">Water</span>
      </Link>
    </div>
  );
}
