function getBgs(isMinified: boolean = false): string[] {
  let bgs: string[] = [];
  const path = "/assets/bgs/";
  const bgsCount = 21; // Go to: `hostname/assets/bgs`, you will find 21 image
  const extension = ".jpg";
  const minifiedExtension = ".webp";

  const ext = isMinified ? minifiedExtension : extension;
  for (let i = 0; i < bgsCount; i++) bgs.push(path + "bg" + i + ext);
  return bgs;
}

export default getBgs;
