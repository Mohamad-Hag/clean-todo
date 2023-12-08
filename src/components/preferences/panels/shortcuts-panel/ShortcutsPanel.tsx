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
import labels from "data/json/ui-labels.json";

export default function ShortcutsPanel() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{labels.shortcut}</Th>
            <Th>{labels.description}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Kbd>{labels.ctrl}</Kbd> {labels.plusSign} <Kbd>{labels.q}</Kbd>
            </Td>
            <Td>{labels.createNewTodo}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels.ctrl}</Kbd> {labels.plusSign} <Kbd>{labels.b}</Kbd>
            </Td>
            <Td>{labels.createNewCategory}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels.ctrl}</Kbd> {labels.plusSign} <Kbd>{labels.a}</Kbd>
            </Td>
            <Td>{labels.selectAllTodos}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels.shift}</Kbd> {labels.plusSign} <Kbd>{labels.l}</Kbd>
            </Td>
            <Td>{labels.lockScreen}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels.shift}</Kbd> {labels.plusSign} <Kbd>{labels.p}</Kbd>
            </Td>
            <Td>{labels.openPreferences}</Td>
          </Tr>
          <Tr>
            <Td>
              <Kbd>{labels.esc}</Kbd>
            </Td>
            <Td>{labels.exitSelectMode}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
