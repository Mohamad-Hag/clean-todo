import pathnames from "data/json/pathnames.json";
import { useDispatch } from "react-redux";
import { edit, remove } from "redux/features/todosSlice";

const useSidebarButtonDrop = (link: string) => {
  const d = useDispatch();

  const drop = (id: number) => {
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

  return drop;
};

export default useSidebarButtonDrop;
