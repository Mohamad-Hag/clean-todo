import TodoMain from "components/TodoMain";
import { BrowserRouter as Router } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <TodoMain />
    </Router>
  );
}
