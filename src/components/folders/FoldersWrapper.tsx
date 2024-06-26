import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useState } from "react";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";
import FoldersButton from "./FoldersButton";

export default function FoldersWrapper({ children }: WithMultipleChildren) {
  const { language } = useLanguage();
  const [index, setIndex] = useState<number>(1);

  const changed = () => {
    setIndex(index === 0 ? 1 : 0);
  };

  return (
    <Accordion allowToggle index={index} onChange={changed}>
      <AccordionItem className="border-none">
        <FoldersButton
        
          setIndex={setIndex}
          title={labels[language.code].folders}
        />
        <AccordionPanel
          className="ml-4 mr-6 rounded-md flex flex-col"
          style={{ backgroundColor: "#00000020" }}
        >
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
