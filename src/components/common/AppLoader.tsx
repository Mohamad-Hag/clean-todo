import Logo from "components/Logo";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";

export default function AppLoader() {
  const { language } = useLanguage();
  const todos = useSelector(selectTodos);
  const hasTodos = todos.length !== 0;

  return (
    <div className="h-screen w-screen fixed top-0 right-0 left-0 bottom-0 flex items-center flex-col gap-5 justify-center bg-white text-center">
      <Logo theme="light" className="animate-pulse" />
      <p className="text-lg font-bold text-gray-500 animate-pulse">
        {hasTodos
          ? labels[language.code].loadingTasks
          : labels[language.code].loading}...
      </p>
    </div>
  );
}
