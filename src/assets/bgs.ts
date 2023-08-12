const path = "/assets/bgs/";
const bgsCount = 21; // Go to: `hostname/assets/bgs`, you will find 21 image
const extension = ".jpg";

let bgs: string[] = [];

function addToBgs() {
  for (let i = 0; i < bgsCount; i++) bgs.push(path + "bg" + i + extension);
}

addToBgs();

export default bgs;
