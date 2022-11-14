import trimLower from "./TrimLower";

function isInclude(string: string, criteria: string) {
  return trimLower(string).includes(trimLower(criteria));
}

export default isInclude;
