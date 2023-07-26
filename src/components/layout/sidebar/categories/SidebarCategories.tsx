import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import SidebarCategoriesButton from "./SidebarCategoriesButton";
import CreateCategoryButton from "./CreateCategoryButton";
import SidebarCategoriesInner from "./SidebarCategoriesInner";

export default function SidebarCategories() {
  return (
    <Accordion allowMultiple>
      <AccordionItem className="border-none">
        <SidebarCategoriesButton title="Categories" />
        <AccordionPanel
          className="ml-4 mr-6 rounded-md flex flex-col"
          style={{ backgroundColor: "#00000020" }}
        >
          <CreateCategoryButton />
          <SidebarCategoriesInner />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
