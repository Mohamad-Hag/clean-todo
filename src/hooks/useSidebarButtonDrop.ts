import { useToast } from "@chakra-ui/react";
import pathnames from "data/json/pathnames.json";
import labels from "data/typescript/uiLabels";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  activateSome,
  edit,
  finishSome,
  remove,
  removeSome,
  restoreSome,
  selectAll,
  selectTodos,
} from "redux/features/todosSlice";
import useLanguage from "./useLanguage";

interface ProcessDrop {
  itemsCount: number;
  dropTarget: string;
}

const useSidebarButtonDrop = (link: string) => {
  const d = useDispatch();
  const { language } = useLanguage();
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
        processDrop.dropTarget = labels[language.code].active;
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
        processDrop.dropTarget = labels[language.code].all;
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
        processDrop.dropTarget = labels[language.code].finished;
        break;
      case pathnames.trashPathName:
        d(remove({ id: id, isInTrash: false }));
        processDrop.dropTarget = labels[language.code].trash;
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
        processDrop.dropTarget = labels[language.code].active;
        break;
      case pathnames.allPathName:
        d(restoreSome(ids));
        processDrop.dropTarget = labels[language.code].all;
        break;
      case pathnames.finishedPathName:
        d(finishSome(ids));
        processDrop.dropTarget = labels[language.code].finished;
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
        processDrop.dropTarget = labels[language.code].trash;
        break;
    }

    d(selectAll({ isSelectAll: false }));

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
      title: `${itemsCount} ${
        labels[language.code].itemsHasMovedTo
      } "${dropTarget}".`,
    });
  };

  return drop;
};

export default useSidebarButtonDrop;
