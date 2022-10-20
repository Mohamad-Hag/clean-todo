import { useSelector } from "react-redux";
import Alert from "./components/Alert";
import TodoMain from "./components/TodoMain";
import { selectAlert } from "./redux/features/alertSlice";
import "./styles/App.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";


function App() {
  const alert = useSelector(selectAlert);  

  return (
    <div>
      <div className="app-mask" />
      <TodoMain />
      <Alert
        title={alert.title}
        description={alert.description}
        isOpen={alert.isOpen}
        onClose={alert.onClose}
        onOk={alert.onOk}
      />      
    </div>
  );
}

export default App;
