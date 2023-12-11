import Words from "data/typescript/words";
import LanguageCodes from "utils/enums/LanguageCodes";

type UILabels = {
  [language in LanguageCodes]: { [key in Words]: string };
};

export default UILabels;
