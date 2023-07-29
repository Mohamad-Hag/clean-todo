function getIsActiveArrayActiveIndex(isActiveArray: boolean[]): number {
  return isActiveArray.findIndex((isActive) => isActive);
}

export default getIsActiveArrayActiveIndex;
