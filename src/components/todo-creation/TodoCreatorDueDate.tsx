import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFormDueDateDraft } from "redux/features/draftSlice";
import { selectForm, setDueDate } from "redux/features/formSlice";
import { selectPreferences } from "redux/features/preferencesSlice";

export default function TodoCreatorDueDate() {
  const form = useSelector(selectForm);
  const d = useDispatch();
  const { todoPreferences } = useSelector(selectPreferences);
  const allowDrafts = form.mode === "draft" && todoPreferences?.allowDrafts;

  const dueDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    d(setDueDate(value));
    if (allowDrafts) d(setFormDueDateDraft(value));
  };
  return (
    <FormControl>
      <FormLabel>Due Date</FormLabel>
      <Input
        type="datetime-local"
        value={form.dueDate ? form.dueDate : ""}
        onChange={dueDateChanged}
      />
    </FormControl>
  );
}
