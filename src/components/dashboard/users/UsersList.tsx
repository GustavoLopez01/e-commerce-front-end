import { SquarePen, Trash2 } from "lucide-react";
import type { UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";

type UsersListProps = {
  usersList: UserBody[]
  rolList: UserRole[]
  setUserToEdit: (user: UserBody) => void
  deleteUser: (user: UserBody) => void
}

export default function UsersList({
  usersList,
  rolList,
  setUserToEdit,
  deleteUser
}: UsersListProps) {
  return (
    <>
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
          {usersList.length > 0 &&
            usersList.map(user => {
              const userRole = rolList.find(rol => rol.id === user.rolId);
              return (
                <tr
                  key={user.id}
                  className="text-center h-15"
                >
                  <td>
                    {user.name} {user.lastName}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.phoneNumber}
                  </td>
                  <td>
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
    </>
  )
}
