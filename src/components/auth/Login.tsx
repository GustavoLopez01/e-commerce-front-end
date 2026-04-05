import { useState, type SubmitEvent } from "react";
import { LockKeyhole, Mail, Package } from "lucide-react";
import { login } from "../../api/auth/api_login";
import { errorToast } from "../../toast";
import Loader from "../ux/Loader";
import {
  LoginSchema,
  type LoginType
} from "../../schema/login.schema";
import { addCookie } from "../../helpers/cookie";

export default function Login() {
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLogin = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      username: data.get('email') || '',
      password: data.get('password') || '',
    }

    const isValid = LoginSchema.safeParse(body);

    if (!isValid.success && isValid.error.issues.length > 0) {
      isValid.error.issues.forEach(error =>
        errorToast(error.message)
      );
      return;
    }

    setLoggingIn(true);
    const response = await login(isValid.data as LoginType);
    setLoggingIn(false);

    if (response?.token) {
      addCookie('userToken', response.token);
      window.location.href = "/dashboard";
    } else {
      errorToast(response?.message || 'Ocurrió un error al inciar sesión.')
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div className="min-w-md shadow-2xl rounded-md flex flex-col justify-center text-black bg-white">
        <div className="flex flex-col justify-center items-center pt-5">
          <div className="w-16 h-16 flex justify-center items-center bg-blue-600 rounded-full">
            <Package className="text-white" />
          </div>

          <h2 className="w-full text-center font-black text-2xl pt-2">
            ShopHub
          </h2>
          <span className="text-center py-1">
            Inicia sesión en tu cuenta
          </span>
        </div>

        <form
          className="px-5 py-3 space-y-4"
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <div className="relative flex flex-col gap-sm">
            <label
              className=""
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <Mail className="absolute top-1/2 left-3 text-gray-400" />
            <input
              id="email"
              name="email"
              type="email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full outline-0"
              placeholder="tu@email"
            />
          </div>

          <div className="relative flex flex-col gap-sm">
            <label
              className=""
              htmlFor="password"
            >
              Contraseña
            </label>

            <LockKeyhole className="absolute top-1/2 left-3 text-gray-400" />
            <input
              id="password"
              name="password"
              type="password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full outline-0"
              placeholder="******"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center gap-3 items-center text-white font-bold text-xl py-2 rounded-md cursor-pointer hover:bg-blue-400 bg-blue-500"
          >
            Iniciar sesión
            {loggingIn && (
              <Loader
                width="20px"
                height="20px"
                color="var(--color-white)"
              />
            )}
          </button>

          <p className="w-full text-black py-2 flex justify-center gap-2">
            ¿No tienes una cuenta?
            <span className="text-blue-600 font-semibold">Regístrate</span>
          </p>
        </form>
      </div>
    </div>
  )
}
