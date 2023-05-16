import * as IconsMd from "react-icons/md"
import * as IconsFa from "react-icons/fa"
import * as IconsGi from "react-icons/gi"
import * as IconsRi from "react-icons/ri"
import * as IconsTfi from "react-icons/tfi"

import { BsSlashCircleFill } from "react-icons/bs"

export default function Icon(ico, name, size = "auto") { //, margin="0", fill = "current"
  let IconComponent;

  if (ico === "md") IconComponent = IconsMd[name];
  if (ico === "fa") IconComponent = IconsFa[name];
  if (ico === "gi") IconComponent = IconsGi[name];
  if (ico === "ri") IconComponent = IconsRi[name];
  if (ico === "tfi") IconComponent = IconsTfi[name];
  if (!IconComponent) {
    return <BsSlashCircleFill style={{ width: size, height: size }} />; //style={{ width: size, height: size, fill: fill }}
  }

  return <IconComponent style={{ width: size, height: size }} />; //style={{ width: size, height: size, margin: margin, fill: fill }}
}