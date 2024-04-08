import pathnames from "data/json/pathnames.json";

function convertPathnamesToNames(): string[] {
  let names: string[] = [];

  for (const value of Object.values(pathnames))
    if (value === pathnames.foldersPathName) continue;
    else
      names = [
        ...names,
        value === pathnames.allPathName ? "all" : value.split("/").pop()!,
      ];

  return names;
}

export default convertPathnamesToNames;
