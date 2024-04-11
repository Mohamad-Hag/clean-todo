export function is414Screen(width: number) {
  return width <= 414;
}

export function is375Screen(width: number) {
  return width <= 350;
}

export function is280Screen(width: number) {
  return width <= 280;
}

export function is1020Screen(width: number) {
  return width <= 1020;
}

export function isMobileScreen(width: number) {
  return (
    is280Screen(width) ||
    is375Screen(width) ||
    is414Screen(width) ||
    is1020Screen(width)
  );
}
