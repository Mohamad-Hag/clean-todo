import TodoProps from "../utils/interfaces/common/Todo";

interface RemoveSelectedAlertDescriptionProps {
  selections: TodoProps[];
}

export default function RemoveSelectedAlertDescription({
  selections,
}: RemoveSelectedAlertDescriptionProps) {
  return (
    <>
      <p>Are you sure you want to remove all the following items?</p>
      <ul className="overflow-auto max-h-32 scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-transparent">
        {selections.map((todo, index) => (
          <li key={index}>
            {index + 1} - <b>{todo.title}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
