import { ActivityContextProvider } from "./components/Providers/ActivityContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <ActivityContextProvider>
      <RouterProvider router={router} />
    </ActivityContextProvider>
  );
}

export default App;
