import "./styles.css";
import ParentComponent from "./component/parent-component";

export default function App() {
  return (
    <div className="text-center dark:text-gray-10 mt-10">
      <ParentComponent />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
