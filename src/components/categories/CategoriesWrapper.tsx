import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";
import CategoriesButton from "./CategoriesButton";
import labels from "data/json/ui-labels.json";

export default function CategoriesWrapper({ children }: WithMultipleChildren) {
  return (
    <Accordion allowMultiple>
      <AccordionItem className="border-none">
        <CategoriesButton title={labels.categories} />
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
