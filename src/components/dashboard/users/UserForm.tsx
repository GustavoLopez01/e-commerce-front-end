import type { SubmitEvent } from "react";
import { createUser, updateUser } from "../../../api/users/api_user";
import { UserSchema } from "../../../schema/user.schema";
import { errorToast, successToast } from "../../../toast";
import type { User, UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";

type UserFormProps = {
  rolList: UserRole[]
  userToEdit: UserBody | null
  closeModal: (user: UserBody) => void
}

export default function UserForm({
  rolList,
  userToEdit,
  closeModal
}: UserFormProps) {

  const handleSave = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") ? String(data.get("name")) : "";
    const lastName = data.get("lastName") ? String(data.get("lastName")) : "";
    const phoneNumber = data.get("phoneNumber") ? String(data.get("phoneNumber")) : "";
    const email = data.get("email") ? String(data.get("email")) : "";
    const rolId = data.get("rolId") ? Number(data.get("rolId")) : 0;
    const password = data.get("password") ? String(data.get("password")) : "";

    const user: User = {
      name,
      lastName,
      phoneNumber,
      email,
      rolId,
      password,
      isEnabled: true
    }

    const isValid = UserSchema.safeParse(user);
    if (!isValid.success) {
      isValid.error.issues.forEach(error =>
        errorToast(error.message)
      );
      return;
    }

    let response = null;
    if (userToEdit?.id) {
      response = await updateUser(userToEdit.id, isValid.data);
    } else {
      response = await createUser(isValid.data);
    }

    if (!response?.success && response?.message) {
      errorToast(response.message)
      return;
    }

    if (response?.user) {
      successToast(`Usuario ${userToEdit?.id ? 'actualizado' : 'registrado'} correctamente`);
      closeModal(
        userToEdit?.id ? {
          ...userToEdit,
          ...response.user,
        } :
          response?.user
      );
    }
  }

  return (
    <>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={handleSave}
      >
        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="name"
          >
            Nombre (s)*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa el nombre del usuario"
            defaultValue={userToEdit?.name}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="lastName"
          >
            Apellido (s) *
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa los apellidos"
            defaultValue={userToEdit?.lastName}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="phoneNumber"
          >
            Número de telefono *
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa el telefono"
            defaultValue={userToEdit?.phoneNumber}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="email"
          >
            Correo electrónico *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa el correo electrónico"
            defaultValue={userToEdit?.email}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="roleId">
            Rol *
          </label>
          <select
            id="rolId"
            name="rolId"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            defaultValue={userToEdit?.rolId}
          >
            {rolList.length > 0 &&
              rolList.map(rol => (
                <option
                  value={rol.id}
                  key={rol.id}
                >
                  {rol.name}
                </option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col gap-0.5">
          <label
            htmlFor="password"
          >
            Contraseña *
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button
          className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md font-bold font-family-inter-bold"
        >
          {userToEdit?.id ? 'Actualizar' : 'Guardar'}
        </button>
      </form>
    </>
  )
}
