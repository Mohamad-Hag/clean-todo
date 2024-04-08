import NoData, { NoDataProps } from "components/common/NoData";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export interface FoldersEmptyListProps extends NoDataProps {
  isSidebarFolders?: boolean;
}

export default function FoldersEmptyList(props: FoldersEmptyListProps) {
  const { language } = useLanguage();
  const { isSidebarFolders = true } = props;

  const hexColor = isSidebarFolders ? "#ffffff90" : "#00000095";
  const textColor = props.textColor !== undefined ? props.textColor : hexColor;
  const iconColor = props.iconColor !== undefined ? props.iconColor : hexColor;
  const description =
    props.description !== undefined
      ? props.description
      : labels[language.code].toCreateNewFolders;

  return (
    <NoData
      {...props}
      description={description}
      title={labels[language.code].noFolders}
      textColor={textColor}
      iconColor={iconColor}
    />
  );
}
