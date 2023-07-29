import NoData from "../common/NoData";
import labels from "../../data/json/ui-labels.json";

export default function CategoriesEmptyList() {
  return (
    <NoData
      description=""
      title={labels.noCategories}
      textColor="#ffffff90"
      iconColor="#ffffff90"
    />
  );
}
