import { useMemo, useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import type { UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";

type UsersListProps = {
  usersList: UserBody[]
  rolList: UserRole[]
  setUserToEdit: (user: UserBody) => void
  deleteUser: (user: UserBody) => void
  setShowModalUser: (show: boolean) => void
}

export default function UsersList({
  usersList,
  rolList,
  setUserToEdit,
  deleteUser,
  setShowModalUser
}: UsersListProps) {

  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    if (!search) return usersList;
    return usersList.filter(user =>
      user.email.includes(search) ||
      user.name.includes(search) ||
      user.lastName.includes(search) ||
      user.phoneNumber.includes(search)
    );
  }, [usersList, search]);


  return (
    <>
      <div className="grid md:grid-cols-2 gap-3 pb-5">
        <div className="flex h-10 gap-1">
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="bg-white px-5 rounded-md outline-0"
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <div className="flex md:justify-end">
          <button
            className="bg-blue-500 cursor-pointer font-family-inter-bold text-white px-5 py-2 rounded-md"
            onClick={() => setShowModalUser(true)}
          >
            + Agregar usuario
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full rounded-sm shadow table-auto border-collapse text-sm">
          <thead className="text-left text-gray-400 bg-gray-100 uppercase">
            <tr>
              <th className="font-normal text-center py-3 pl-4 rounded-tl-sm">Nombre</th>
              <th className="font-normal text-center">Correo electrónico</th>
              <th className="font-normal text-center">Telefono</th>
              <th className="font-normal text-center">rol</th>
              <th className="font-normal text-center rounded-tr-md">acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.length > 0 &&
              filteredList.map(user => {
                const userRole = rolList.find(rol => rol.id === user.rolId);
                return (
                  <tr
                    key={user.id}
                    className="text-center h-15"
                  >
                    <td className="min-w-32">
                      {user.name} {user.lastName}
                    </td>
                    <td className="min-w-32">
                      {user.email}
                    </td>
                    <td className="min-w-32">
                      {user.phoneNumber}
                    </td>
                    <td className="min-w-32">
                      {userRole?.name}
                    </td>
                    <td>
                      <div className="flex gap-3 justify-center items-center">
                        <SquarePen
                          className="text-blue-500 cursor-pointer size-5"
                          onClick={() => setUserToEdit(user)}
                        />
                        <Trash2
                          className="text-red-500 cursor-pointer size-5"
                          onClick={() => deleteUser(user)}
                        />
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
