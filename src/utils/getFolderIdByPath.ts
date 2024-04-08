function getFolderIdByPath(path: string): number {
  return path.includes("-") ? parseInt(path.split("-")[1].trim()) : 0;
}

export default getFolderIdByPath;
