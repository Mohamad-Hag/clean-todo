import { useDispatch } from "react-redux";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../redux/features/alertSlice";
import PerferencesButton from "./PerferencesButton";
import PerferencesModal from "./PerferencesModal";

export default function Perferences() {
  const d = useDispatch();

  const openPerferences = () => {
    d(open());
    d(setTitle("Perferences"));
    d(setDescription(<PerferencesModal />));
    d(setOnOk(() => d(close())));
  };

  return <PerferencesButton onClick={openPerferences} />;
}
