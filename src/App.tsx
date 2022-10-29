import "quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import Alert from "./components/Alert";
import TodoMain from "./components/TodoMain";
import { selectAlert } from "./redux/features/alertSlice";
import "./styles/App.css";

function App() {
  const alert = useSelector(selectAlert);

  return (
    <div className="App">
      <div className="app-mask" />
      <TodoMain />
      <Alert
        title={alert.title} 
        description={alert.description}
        isOpen={alert.isOpen}
        isOkButtonDisabled={alert.isOkButtonDisabled}
        onClose={alert.onClose}
        onOk={alert.onOk}
      />
    </div>
  );
}

export default App;
