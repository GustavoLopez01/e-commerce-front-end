import { RouterProvider } from "react-router";
import router from "./router/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  )
}

export default App
