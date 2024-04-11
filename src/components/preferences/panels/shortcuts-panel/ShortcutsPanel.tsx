import {
  Kbd,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function ShortcutsPanel() {
  const { language } = useLanguage();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{labels[language.code].shortcut}</Th>
            <Th>{labels[language.code].description}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].ctrl}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].q}</Kbd>
            </Td>
            <Td>{labels[language.code].createNewTodo}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].ctrl}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].b}</Kbd>
            </Td>
            <Td>{labels[language.code].createNewFolder}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].ctrl}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].a}</Kbd>
            </Td>
            <Td>{labels[language.code].selectAllTodos}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].ctrl}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].a}</Kbd>
            </Td>
            <Td>{labels[language.code].selectAllTodos}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].shift}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].mouseClick}</Kbd>
            </Td>
            <Td>{labels[language.code].selectMultipleTodos}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].shift}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].p}</Kbd>
            </Td>
            <Td>{labels[language.code].openPreferences}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].alt}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].oneSymbol}</Kbd>{" "}
              {labels[language.code].arrowRightSymbol}{" "}
              <Kbd>{labels[language.code].nineSymbol}</Kbd>
            </Td>
            <Td>{labels[language.code].sidebarNavigation}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].alt}</Kbd>{" "}
              {labels[language.code].plusSign}{" "}
              <Kbd>{labels[language.code].arrowUpSymbol}</Kbd>{" "}
              <Kbd>{labels[language.code].arrowDownSymbol}</Kbd>
            </Td>
            <Td>{labels[language.code].sidebarNavigation}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>Del</Kbd>
            </Td>
            <Td>{labels[language.code].removeAll}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels[language.code].esc}</Kbd>
            </Td>
            <Td>{labels[language.code].exitSelectMode}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
