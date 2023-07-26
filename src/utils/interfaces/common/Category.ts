export default interface Category extends CategoryEditable {
  id?: number;
}

export interface CategoryEditable {
  title?: string;
  icon?: string;
}
