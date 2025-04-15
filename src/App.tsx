import { ActivityContextProvider } from "./components/Providers/ActivityContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer, Slide } from "react-toastify";
import { UserContextProvider } from "./components/Providers/UserContext";

function App() {
  return (
    <ActivityContextProvider>
      <UserContextProvider>
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
      </UserContextProvider>
    </ActivityContextProvider>
  );
}

export default App;
