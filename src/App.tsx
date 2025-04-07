import { ActivityContextProvider } from "./components/Providers/ActivityContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <ActivityContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <RouterProvider router={router} />
    </ActivityContextProvider>
  );
}

export default App;
