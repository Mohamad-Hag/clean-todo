function isCategoryPath(path: string) {
  return path.split("-")[0] === "/categories/category";
}

export default isCategoryPath;
