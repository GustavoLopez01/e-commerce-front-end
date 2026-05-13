import { useEffect, useState, type SubmitEvent } from "react";
import { useUserStore } from "../../../store/useUser";
import { getAllRoles } from "../../../api/users/api_roles";
import { updateUser } from "../../../api/users/api_user";
import { UserSchema } from "../../../schema/user.schema";
import { errorToast, successToast } from "../../../toast";
import HeaderSection from "../HeaderSection";
import Loader from "../../ux/Loader";
import type { UserRole } from "../../../types/rol";

export default function ProfileUser() {
  const userStore = useUserStore(state => state.user);
  const updateUserStore = useUserStore(state => state.updateUser);

  const [rolList, setRolList] = useState<UserRole[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    setIsLoading(true);
    const response = await getAllRoles();
    if (response?.success) setRolList(response.roles);
    if (!response?.success && response?.message) errorToast(response.message);
    setIsLoading(false);
  }

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userStore?.id) return;

    const data = new FormData(e.currentTarget);
    const name = data.get("name") ? data.get("name") : "";
    const lastName = data.get("lastName") ? data.get("lastName") : "";
    const password = data.get("password") ? data.get("password") : "";
    const phoneNumber = data.get("phoneNumber") ? data.get("phoneNumber") : 0;
    const email = data.get("email") ? data.get("email") : "";
    const rolId = data.get("role") ? Number(data.get("role")) : 0;

    const body = {
      name,
      lastName,
      password,
      phoneNumber,
      email,
      rolId
    }

    const isValid = UserSchema.safeParse(body);

    if (!isValid.success) {
      return isValid.error.issues.forEach(error =>
        errorToast(error.message)
      );
    }

    const response = await updateUser(userStore.id, isValid.data);

    if (!response?.success && response?.message) {
      return errorToast(response.message);
    }

    successToast('Perfil actualizado correctamente');
    updateUserStore({
      ...userStore,
      ...response?.user
    });
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loader
            width="30px"
            height="30px"
          />
        </div>
      ) : (
        <>
          <HeaderSection title="Mi perfil" />
          <form
            className="py-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5 text-black"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="px-1"
              >
                Nombre (s)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                placeholder="Ingresa tu nombre(s)"
                defaultValue={userStore?.name}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="lastName"
                className="px-1"
              >
                Apellido (s)
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                placeholder="Ingresa tu apellido(s)"
                defaultValue={userStore?.lastName}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="phoneNumber"
                className="px-1"
              >
                Teléfono
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                placeholder="Teléfono"
                defaultValue={userStore?.phoneNumber}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="px-1"
              >
                Correo electronico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                placeholder="Ingresa tu correo electrónico"
                defaultValue={userStore?.email}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="role"
                className="px-1"
              >
                Rol
              </label>
              <select
                id="role"
                name="role"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                defaultValue={userStore?.rolId}
              >
                <option value="0">-- Selecciona una opción --</option>
                {rolList.length > 0 &&
                  rolList.map(rol => (
                    <option
                      key={rol.id}
                      value={rol.id}
                    >
                      {rol.name}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="px-1"
              >
                Correo electrónico
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full pl-5 pr-4 py-2 border bg-white border-gray-300 rounded-full outline-0"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            <div className="md:col-span-2 xl:col-span-3 flex justify-center">
              <button className="bg-blue-500 text-white font-family-inter-bold rounded-full px-10 py-2 cursor-pointer hover:bg-blue-600">
                Guardar
              </button>
            </div>

          </form>
        </>
      )}
    </>
  )
}
