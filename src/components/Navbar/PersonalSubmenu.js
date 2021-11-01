import React from "react";
import { FaUserClock } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function PersonalSubmenu(props) {
  let sub_menu_class=!props.compact?"personal-submenu":"personal-submenu-compact";
  return (
    <div>
      <div className={sub_menu_class}>
        <Link to="/" className="link">
          <FaUserClock className="icons" />
          <span className="span-expand">Timesheet</span>
        </Link>
      </div>
    </div>
  );
}
