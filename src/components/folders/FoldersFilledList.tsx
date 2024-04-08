import { useSelector } from "react-redux";
import { default as IFolder } from "utils/interfaces/common/Folder";
import Folder from "./Folder";
import {
  selectSidebarIsActiveArray,
  update,
} from "redux/features/sidebarIsActiveArraySlice";
import { useDispatch } from "react-redux";
import useGetSidebarButtons from "hooks/useGetSidebarButtons";

interface FoldersFilledListProps {
  folders: IFolder[];
}

export default function FoldersFilledList({ folders }: FoldersFilledListProps) {
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const sidebarButtons = useGetSidebarButtons();

  const d = useDispatch();

  const select = (index: number) => {
    d(update(index));
  };

  return (
    <>
      {folders.map((folder, i) => (
        <Folder
          key={folder.id}
          id={folder.id!}
          title={folder.title!}
          icon={folder.icon!}
          index={sidebarButtons.length + i}
          to={`/folders/folder-${folder.id}`}
          isActive={isActiveArray[sidebarButtons.length + i]}
          onSelect={select}
        />
      ))}
    </>
  );
}
