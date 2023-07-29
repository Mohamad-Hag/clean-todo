import categoryIcons from "../data/typescript/categoryIcons";

function getCategoryIconByTitle(title: string): React.ReactElement {
  return categoryIcons.find((categoryIcon) => categoryIcon.title === title)
    ?.icon!;
}

export default getCategoryIconByTitle;
