import { useUserStore } from "../../../store/useUser";

export default function ProfileUser() {
  const userStore = useUserStore(state => state.user);
  return (
    <>
      <form
        className="p-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5 text-black"
        autoComplete="off"
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
            className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full outline-0"
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
            className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full outline-0"
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
            id="lastName"
            name="lastName"
            type="text"
            className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full outline-0"
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
            className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full outline-0"
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
            className="w-full pl-5 pr-4 py-2 border border-gray-300 rounded-full outline-0"
          >
          </select>
        </div>

      </form>
    </>
  )
}
