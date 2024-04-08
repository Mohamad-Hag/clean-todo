function isFolderPath(path: string) {
  return path.split("-")[0] === "/folders/folder";
}

export default isFolderPath;
