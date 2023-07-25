import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/user-original.png",
  fullDecal: "/user-original.png",
});

export default state;
