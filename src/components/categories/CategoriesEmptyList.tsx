import NoData, { NoDataProps } from "components/common/NoData";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export interface CategoriesEmptyListProps extends NoDataProps {}

export default function CategoriesEmptyList(props: CategoriesEmptyListProps) {
  const { language } = useLanguage();

  const textColor =
    props.textColor !== undefined ? props.textColor : "#00000090";
  const iconColor =
    props.iconColor !== undefined ? props.iconColor : "#00000090";
  const description =
    props.description !== undefined
      ? props.description
      : labels[language.code].toCreateNewCategories;

  return (
    <NoData
      {...props}
      description={description}
      title={labels[language.code].noCategories}
      textColor={textColor}
      iconColor={iconColor}
    />
  );
}
