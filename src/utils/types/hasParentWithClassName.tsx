function hasParentWithClassName(element: any, className: string): boolean {
  while (element && element !== document.documentElement) {
    // Check if the current element has the class
    if (element.classList.contains(className)) {
      return true; // Found a parent with the class
    }
    // Move to the next parent
    element = element.parentNode;
  }
  // No parent with the class found
  return false;
}

export default hasParentWithClassName;
