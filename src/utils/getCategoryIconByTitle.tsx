import categoryIcons from "../data/categoryIcons";

function getCategoryIconByTitle(title: string): React.ReactElement {
  return categoryIcons.find((categoryIcon) => categoryIcon.title === title)
    ?.icon!;
}

export default getCategoryIconByTitle;
