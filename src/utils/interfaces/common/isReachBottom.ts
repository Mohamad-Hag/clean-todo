function isReachBottom(scrollableElement: any): boolean {
  return (
    scrollableElement.scrollTop ===
    scrollableElement.scrollHeight - scrollableElement.offsetHeight
  );
}

export default isReachBottom;
