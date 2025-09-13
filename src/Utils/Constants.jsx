import { PiAddressBookBold, PiAlarmBold } from "react-icons/pi";
import { CgDatabase, CgTrello } from "react-icons/cg";

import { LuGithub, LuLinkedin } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";

export const navbarItems = [
  {
    name: "Page 1",
    slug: "page1",
    icon: <PiAddressBookBold />,
  },
  {
    name: "Page 2",
    slug: "page2",
    icon: <PiAlarmBold />,
  },
  {
    name: "Page 3",
    slug: "page3",
    icon: <CgDatabase />,
  },
  {
    name: "Page 4",
    slug: "page4",
    icon: <CgTrello />,
  },
];


export const socialMediaItems = [
  {
    "name": "LinkedIn",
    "icon": <LuLinkedin />,
    "url": "https://www.linkedin.es"
  }, {
    "name": "GitHub",
    "icon": <LuGithub />,
    "url": "https://www.github.es"
  }, {
    "name": "Web",
    "icon": <TbWorldWww />,
    "url": "https://www.irenealcainealvarez.es"
  },
]
