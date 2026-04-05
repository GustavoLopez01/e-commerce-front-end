
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SquarePen, Trash2 } from 'lucide-react';
import type { UserRole } from '../../../types/rol';

type TableProps = {
  rolList: UserRole[]
}

export default function Table({
  rolList
}: TableProps) {

  const UpdateButton = (rol: UserRole) => {
    console.log(rol);

    return (
      <div className="flex gap-2">
        <SquarePen
          className="text-blue-500 cursor-pointer size-5"
        // onClick={() => setUserToEdit(user)}
        />
        <Trash2
          className="text-red-500 cursor-pointer size-5"
        // onClick={() => deleteUser(user)}
        />
      </div>
    )
  }

  return (
    <>
      <DataTable
        value={rolList}
        tableStyle={{ minWidth: '50rem' }}
        pt={{
          table: { className: 'w-full text-sm text-left text-gray-500' },
          thead: { className: 'text-xs font-family-inter-bold text-gray-700 uppercase bg-gray-50' },
          tbody: { className: 'bg-white' },
        }}
      >
        <Column field="name" header="Nombre"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column header="acciones" body={UpdateButton}></Column>
      </DataTable>
    </>
  )
}


