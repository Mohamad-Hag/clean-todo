import { useToast } from "@chakra-ui/react";
import pathnames from "data/json/pathnames.json";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  activateSome,
  edit,
  finishSome,
  remove,
  removeSome,
  restoreSome,
  selectTodos,
} from "redux/features/todosSlice";

interface ProcessDrop {
  itemsCount: number;
  dropTarget: string;
}

const useSidebarButtonDrop = (link: string) => {
  const d = useDispatch();
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;
  const { pathname } = useLocation();
  const toast = useToast();

  const processSingleDrop = (id: number): ProcessDrop => {
    let processDrop: ProcessDrop = {
      itemsCount: 1,
      dropTarget: "",
    };

    switch (link) {
      case pathnames.activePathName:
        d(
          edit({
            id: id,
            editable: {
              isInTrash: false,
              isFinished: false,
            },
          })
        );
        processDrop.dropTarget = "Active";
        break;
      case pathnames.allPathName:
        d(
          edit({
            id: id,
            editable: {
              isInTrash: false,
            },
          })
        );
        processDrop.dropTarget = "All";
        break;
      case pathnames.finishedPathName:
        d(
          edit({
            id: id,
            editable: {
              isInTrash: false,
              isFinished: true,
            },
          })
        );
        processDrop.dropTarget = "Finished";
        break;
      case pathnames.trashPathName:
        d(remove({ id: id, isInTrash: false }));
        processDrop.dropTarget = "Trash";
        break;
    }

    return processDrop;
  };

  const processArrayDrop = (ids: number[]): ProcessDrop => {
    let processDrop: ProcessDrop = {
      itemsCount: ids.length,
      dropTarget: "",
    };

    switch (link) {
      case pathnames.activePathName:
        d(activateSome(ids));
        processDrop.dropTarget = "Active";
        break;
      case pathnames.allPathName:
        d(restoreSome(ids));
        processDrop.dropTarget = "All";
        break;
      case pathnames.finishedPathName:
        d(finishSome(ids));
        processDrop.dropTarget = "Finished";
        break;
      case pathnames.trashPathName:
        if (pathname !== pathnames.trashPathName)
          d(
            removeSome(
              selections.map((selection) => ({
                id: selection.id,
                isInTrash: selection.isInTrash,
              }))
            )
          );
        processDrop.dropTarget = "Trash";
        break;
    }

    return processDrop;
  };

  const drop = (id: string) => {
    let ids: number | number[] = !isSelectMode ? parseInt(id) : JSON.parse(id);
    let processDrop: ProcessDrop = {
      itemsCount: 0,
      dropTarget: "",
    };

    if (Array.isArray(ids)) processDrop = processArrayDrop(ids);
    else processDrop = processSingleDrop(ids);

    let itemsCount = processDrop.itemsCount;
    let dropTarget = processDrop.dropTarget;

    toast({      
      duration: 3000,
      variant: "subtle",
      title: `${itemsCount} items has been moved to "${dropTarget}".`,
    });
  };

  return drop;
};

export default useSidebarButtonDrop;
