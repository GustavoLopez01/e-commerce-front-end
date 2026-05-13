import ModalComponent from "./ModalComponent";
import { api_saveRole, api_updateRole } from "../../api/users/api_roles";
import { RoleSchema } from "../../schema/role.schema";
import { errorToast, successToast } from "../../toast";
import type { UserRole } from "../../types/rol";
import type { SubmitEvent } from "react";

type RoleModalProps = {
  isOpen: boolean
  role: UserRole | null
  handleUpdatedList: (rol: UserRole) => void
  close: () => void
}

export default function RoleModal({
  isOpen,
  role,
  handleUpdatedList,
  close
}: RoleModalProps) {

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = data.get("name");
    const description = data.get("description");
    const body = {
      name,
      description
    }

    const isValid = RoleSchema.safeParse(body);

    if (!isValid.success) {
      isValid.error.issues.forEach(error =>
        errorToast(error.message)
      )
      return;
    }

    let response = null;

    if (role?.id) {
      response = await api_updateRole(isValid.data, role.id);
    } else {
      response = await api_saveRole(isValid.data);
    }

    if (!response?.success && response?.message) {
      errorToast(response.message);
      return;
    }

    if (response?.role) handleUpdatedList(response?.role);
    close();
    successToast('Se agrego el rol correctamente.');
  }

  return (
    <>
      <ModalComponent
        isOpen={isOpen}
        title={role?.id ? 'Actualizar rol' : 'Crear rol'}
        close={close}
      >
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0"
              defaultValue={role?.name}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="text-black md:col-span-2 px-3 py-2 border border-gray-300 rounded-md outline-0 resize-none min-h-30"
              defaultValue={role?.description}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-family-inter-bold py-2 px-4 rounded-full cursor-pointer"
          >
            {role?.id ? 'Actualizar' : 'Guardar'}
          </button>
        </form>
      </ModalComponent>
    </>
  )
}
