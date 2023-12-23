import pathnames from "data/json/pathnames.json";
import { useDispatch, useSelector } from "react-redux";
import {
  activateSome,
  edit,
  finishSome,
  remove,
  removeSome,
  restoreSome,
  selectTodos,
} from "redux/features/todosSlice";

const useSidebarButtonDrop = (link: string) => {
  const d = useDispatch();
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;

  const processSingleDrop = (id: number) => {
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
        break;
      case pathnames.trashPathName:
        d(remove({ id: id, isInTrash: false }));
        break;
    }
  };

  const processArrayDrop = (ids: number[]) => {
    switch (link) {
      case pathnames.activePathName:
        d(activateSome(ids));
        break;
      case pathnames.allPathName:
        d(restoreSome(ids));
        break;
      case pathnames.finishedPathName:
        d(finishSome(ids));
        break;
      case pathnames.trashPathName:
        d(
          removeSome(
            selections.map((selection) => ({
              id: selection.id,
              isInTrash: selection.isInTrash,
            }))
          )
        );
        break;
    }
  };

  const drop = (id: string) => {
    let ids: number | number[] = !isSelectMode ? parseInt(id) : JSON.parse(id);

    if (Array.isArray(ids)) processArrayDrop(ids);
    else processSingleDrop(ids);
  };

  return drop;
};

export default useSidebarButtonDrop;
