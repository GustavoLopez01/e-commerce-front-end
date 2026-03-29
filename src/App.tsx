import { RouterProvider } from "react-router";
import router from "./router/routes";
import { PrimeReactProvider } from "primereact/api";
import { ToastContainer } from "react-toastify";
import Tailwind from 'primereact/passthrough/tailwind';

function App() {
  return (
    <>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind
        }}
      >
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
      </PrimeReactProvider>
    </>
  )
}

export default App
