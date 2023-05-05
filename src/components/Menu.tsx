import menuLogo from "../assets/icons8-grip-lines-32.png";
import briefActive from "../assets/menu-icons/briefcase-active.svg";
import brief from "../assets/menu-icons/briefcase-inactive.svg";
import education from "../assets/menu-icons/education-inactive.png";
import educationActive from "../assets/menu-icons/education-active.png";
import messageActive from "../assets/menu-icons/message-active.png";
import message from "../assets/menu-icons/message-inactive.png";
import projectsActive from "../assets/menu-icons/projects-active.png";
import projects from "../assets/menu-icons/projects-inactive.png";
import { MenuIconType } from "../types";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
const Menu = () => {
  const menu: MenuIconType[] = [
    {
      activeImagePath: projectsActive,
      inactiveImagePath: projects,
    },
    {
      activeImagePath: briefActive,
      inactiveImagePath: brief,
    },
    {
      activeImagePath: educationActive,
      inactiveImagePath: education,
    },
    {
      activeImagePath: messageActive,
      inactiveImagePath: message,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-[10vh] w-full items-center justify-center">
      <div className="rounded-full border-gray-600 border-2">
        <img src={menuLogo} />
      </div>
      <div className="flex flex-col border-gray-600 border-2 rounded-lg p-2 gap-[3vh]">
        {menu.map((menuIcon, index) => {
          const path =
            activeIndex === index
              ? menuIcon.activeImagePath
              : menuIcon.inactiveImagePath;
          return (
            <MenuIcon
              key={"menu-icon" + index}
              imagePath={path}
              onClick={() => {
                setActiveIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
