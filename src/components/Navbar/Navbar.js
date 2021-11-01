import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { MdSpaceDashboard } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { BiChevronsRight } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import {  Link } from "react-router-dom";
import Activitysubmenu from "./activity_submenu";
import Inventorysubmenu from "./inventory_submenu";
import Personalsubmenu from "./PersonalSubmenu";
import Assetssubmenu from "./assets_submenu";

function Navbar() {
  const [activityopen, setactivityOpen] = useState(false);
  const [inventoryopen, setInventoryOpen] = useState(false);
  const [personalopen, setPersonalOpen] = useState(false);
  const [assetsopen, setAssetsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const activityRef = useRef();
  const inventoryRef = useRef();
  const personalRef = useRef();
  const assetsRef = useRef();
  useEffect(() => {
    function handler(event) {
      if (!activityRef.current?.contains(event.target)) {
        setactivityOpen(false);
      }
      if (!inventoryRef.current?.contains(event.target)) {
        setInventoryOpen(false);
      }
      if (!personalRef.current?.contains(event.target)) {
        setPersonalOpen(false);
      }
      if (!assetsRef.current?.contains(event.target)) {
        setAssetsOpen(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  let menu_class = compact ? "menu-compact" : "NavigationMenu";
  let opac_span = compact ? "span-compact" : "span-expand";
  let toogle_navbar = compact ? "nav-toggle-compact" : "nav-toggle";
  return (
    <div className={menu_class}>
      <div className="Company">
        {!compact && <div className="Cname">GTS Trace</div>}
        <div
          className={toogle_navbar}
          onClick={() => {
            setCompact(!compact);
          }}
        >
          <BiChevronsRight className="icons-exp" />
        </div>
      </div>
      <div className="navlink-group">
        <Link to="/" className="link">
          <MdSpaceDashboard className="icons" data />
          {compact && <div className="Tooltip">Dashboard</div>}
          <span className={opac_span}>Dashboard</span>
          
        </Link>
        

        <Link to="/Customreports" className="link">
          <VscOpenPreview className="icons" />
          {compact && <div className="Tooltip">Customer reports</div>}
          <span className={opac_span}>Custom Reports</span>
        </Link>
      </div>
      <div className="navlink-group">
        <Link to="/Jobs" className="link">
          <GoProject className="icons" />
          {compact && <div className="Tooltip">Jobs</div>}
          <span className={opac_span}>Jobs</span>
        </Link>

        <div
      
          className="link"
          ref={activityRef}
          onClick={() => {
            setactivityOpen(!activityopen);
          }}
        >
          <FaTasks className="icons" />
          {compact && <div className="Tooltip">Activities</div>}
          <span className={opac_span}>Activities</span>
          {activityopen ? <Activitysubmenu compact={compact} /> : null}
        </div>

        <div
          
          className="link"
          ref={inventoryRef}
          onClick={() => setInventoryOpen(!inventoryopen)}
        >
          <FaWarehouse className="icons" />
          {compact && <div className="Tooltip">Inventory</div>}
          <span className={opac_span}>Inventory</span>

          {inventoryopen ? <Inventorysubmenu compact={compact} /> : null}
        </div>

        <div
          
          className="link"
          ref={personalRef}
          onClick={() => setPersonalOpen(!personalopen)}
        >
          <BsPeopleFill className="icons" />
          {compact && <div className="Tooltip">Personal</div>}
          <span className={opac_span}>Personal</span>
          {personalopen ? <Personalsubmenu compact={compact} /> : null}
        </div>
      </div>
      <div className="navlink-group">
        <div
          
          className="link"
          ref={assetsRef}
          onClick={() => setAssetsOpen(!assetsopen)}
        >
          <GiFarmTractor className="icons" />
          {compact && <div className="Tooltip">Farm Assets</div>}
          <span className={opac_span}>Farm Assets</span>
          {assetsopen ? <Assetssubmenu compact={compact} /> : null}
        </div>
      </div>
      <div className="navlink-group">
        <Link to="/Calender" className="link">
          <FaCalendarAlt className="icons" />
          {compact && <div className="Tooltip">Calender</div>}
          <span className={opac_span}>Calender</span>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
