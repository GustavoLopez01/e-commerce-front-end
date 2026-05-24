import { useMemo, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Pagination from "../../pagination/Pagination";
import { SquarePen, Trash2 } from "lucide-react";
import type { UserBody } from "../../../types/user";
import type { UserRole } from "../../../types/rol";
import type { PaginatorPageChangeEvent } from "primereact/paginator";

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
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [register, setRegister] = useState(10);

  const ButtonActions = (user: UserBody) => {
    return (
      <div className="flex gap-2">
        <SquarePen
          className="text-blue-500 cursor-pointer size-5"
          onClick={() => {
            setUserToEdit(user);
          }}
        />
        <Trash2
          className="text-red-500 cursor-pointer size-5"
          onClick={() => {
            deleteUser(user);
          }}
        />
      </div>
    )
  }

  const CellRole = (user: UserBody) => {
    const userRole = rolList.find(rol => rol.id === user.rolId);
    return (
      <>
        {userRole?.name}
      </>
    )
  }

  const filteredList = useMemo(() => {
    if (!search) return usersList;
    return usersList.filter(user =>
      user.email.includes(search) ||
      user.name.includes(search) ||
      user.lastName.includes(search) ||
      user.phoneNumber.includes(search)
    );
  }, [usersList, search]);

  const userListPerPage = useMemo(() => {
    const copy = [...filteredList];
    const start = page === 1 ? 0 : ((page - 1) * register);
    return copy.splice(start, register);
  }, [filteredList, register, page]);

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

      <DataTable
        value={userListPerPage}
        tableStyle={{ minWidth: '50rem' }}
        emptyMessage="Sin registros"
        pt={{
          table: { className: 'w-full text-sm text-left text-gray-500' },
          thead: { className: 'text-xs font-family-inter-bold text-gray-700 uppercase bg-gray-50' },
          tbody: { className: 'bg-white' },
        }}
      >
        <Column field="name" header="Nombre"></Column>
        <Column field="email" header="Correo electrónico"></Column>
        <Column field="phoneNumber" header="Teléfono"></Column>
        <Column header="Rol" body={CellRole}></Column>
        <Column header="acciones" body={ButtonActions}></Column>
      </DataTable>

      <Pagination
        first={first}
        totalRecords={usersList.length}
        rows={register}
        onPageChange={(e: PaginatorPageChangeEvent) => {
          setFirst(e.first);
          setPage(e.page + 1)
        }}
      />
    </>
  )
}
