function updateArray(sidebarIsActiveArray: boolean[], index: number) {
  let activeArray = [...sidebarIsActiveArray];
  let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
  activeArray[activeBackgroundIndex] = false;
  activeArray[index] = true;
  return activeArray;
}

export default updateArray;
