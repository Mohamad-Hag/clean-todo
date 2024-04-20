import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { setFormFolderIdDraft } from "redux/features/draftSlice";
import { selectFolders } from "redux/features/folderSlice";
import { selectForm, setFolderId } from "redux/features/formSlice";
import { selectPreferences } from "redux/features/preferencesSlice";

export default function TodoCreatorFolderSelector() {
  const { language } = useLanguage();
  const form = useSelector(selectForm);
  const { todoPreferences } = useSelector(selectPreferences);
  const allowDrafts = form.mode === "draft" && todoPreferences?.allowDrafts;
  const folders = useSelector(selectFolders);
  const d = useDispatch();

  const folderChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const folderId = isNaN(Number(value)) ? undefined : Number(value);
    d(setFolderId(folderId));
    if (allowDrafts) d(setFormFolderIdDraft(folderId));
  };

  return (
    <>
      {folders.length !== 0 && (
        <FormControl>
          <FormLabel>{labels[language.code].folder}</FormLabel>
          <Select
            defaultValue={form.folderId ? form.folderId : undefined}
            onChange={folderChanged}
          >
            <option>{labels[language.code].selectFolderDots}</option>
            {folders.map((folder) => (
              <option value={folder.id} key={folder.id}>
                {folder.title}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
}
