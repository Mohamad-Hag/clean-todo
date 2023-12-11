import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ThemePanel() {
  const { language } = useLanguage();

  return <div>{labels[language.code].notSupportedYet}</div>;
}
