// import { swatch, fileIcon, logoShirt, stylishShirt } from "/public";
import fileIcon from "/public/file.png";
import swatch from "/public/swatch.png";

import logoShirt from "/public/logo-tshirt.png";
import stylishShirt from "/public/stylish-tshirt.png";
console.log(swatch,'hnhhjhhhh')
export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch.src,
  },
  {
    name: "filepicker",
    icon: fileIcon.src,
  }
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt.src,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt.src,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
