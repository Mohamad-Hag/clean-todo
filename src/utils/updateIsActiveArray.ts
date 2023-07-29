function updateIsActiveArray(isActiveArray: boolean[], index: number) {
  let activeArray = [...isActiveArray];
  let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
  activeArray[activeBackgroundIndex] = false;
  activeArray[index] = true;
  return activeArray;
}

export default updateIsActiveArray;
