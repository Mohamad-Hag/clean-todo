import { Perferences } from "../features/perferencesSlice";

function changeBackground(perferences: Perferences, background: string) {
  perferences.background = background;
  return perferences;
}

export default changeBackground;
