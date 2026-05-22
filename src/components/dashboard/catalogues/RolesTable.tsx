
import { Suspense, useMemo, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { api_deleteRole } from '../../../api/users/api_roles';
import { errorToast, successToast } from '../../../toast';
import DeleteModal from '../../modal/DeleteModal';
import RoleModal from '../../modal/RoleModal';
import HeaderCatalogue from './HeaderCatalogue';
import Pagination from '../../pagination/Pagination';
import { SquarePen, Trash2 } from 'lucide-react';
import type { UserRole } from '../../../types/rol';
import type { PaginatorPageChangeEvent } from 'primereact/paginator';

type TableProps = {
  rolList: UserRole[]
  setRolList: (roles: UserRole[]) => void
}

export default function RolesTable({
  rolList,
  setRolList
}: TableProps) {

  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [showModalRole, setShowModalRole] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [register, setRegister] = useState(10);

  const handleDelete = async () => {
    if (!currentRole?.id) return;

    const response = await api_deleteRole(currentRole.id);
    if (!response?.success && response?.message) {
      return errorToast(response?.message);
    }

    setRolList(
      rolList.filter(role =>
        role.id !== currentRole.id
      )
    );

    successToast('Rol eliminado correctamente.');
    setShowDeleteModal(false);
    setCurrentRole(null);
  }

  const handleUpdatedList = (rol: UserRole) => {
    setRolList([...rolList, rol]);
  }


  const ButtonActions = (rol: UserRole) => {
    return (
      <div className="flex gap-2">
        <SquarePen
          className="text-blue-500 cursor-pointer size-5"
          onClick={() => {
            setCurrentRole(rol);
            setShowModalRole(true);
          }}
        />
        <Trash2
          className="text-red-500 cursor-pointer size-5"
          onClick={() => {
            setCurrentRole(rol);
            setShowDeleteModal(true);
          }}
        />
      </div>
    )
  }

  const filterRolList = useMemo(() => {
    const copy = [...rolList];
    const start = page === 1 ? 0 : ((page - 1) * register);
    return copy.splice(start, register)
  }, [rolList, register, page]);

  return (
    <>
      {showModalRole && (
        <Suspense fallback={<></>}>
          <RoleModal
            isOpen={showModalRole}
            role={currentRole}
            handleUpdatedList={handleUpdatedList}
            close={() => {
              setCurrentRole(null);
              setShowModalRole(false);
            }}
          />
        </Suspense>
      )}

      {showDeleteModal && (
        <Suspense fallback={<></>}>
          <DeleteModal
            isOpen={showDeleteModal}
            message={`¿Estás seguro de eliminar el siguiente rol ${currentRole?.name}?`}
            onAccept={handleDelete}
            onCancel={() => {
              setCurrentRole(null);
              setShowDeleteModal(false);
            }}
            close={() => {
              setCurrentRole(null);
              setShowDeleteModal(false);
            }}
          />
        </Suspense>
      )}

      <HeaderCatalogue
        titleButton='Agregar rol'
        register={register}
        setRegister={setRegister}
        onClick={() => {
          setCurrentRole(null);
          setShowModalRole(true);
        }}
      />

      <DataTable
        value={filterRolList}
        tableStyle={{ minWidth: '50rem' }}
        pt={{
          table: { className: 'w-full text-sm text-left text-gray-500' },
          thead: { className: 'text-xs font-family-inter-bold text-gray-700 uppercase bg-gray-50' },
          tbody: { className: 'bg-white' },
        }}
      >
        <Column field="name" header="Nombre"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column header="acciones" body={ButtonActions}></Column>
      </DataTable>

      <Pagination
        first={first}
        totalRecords={rolList.length}
        rows={register}
        onPageChange={(e: PaginatorPageChangeEvent) => {
          setFirst(e.first);
          setPage(e.page);
        }}
      />
    </>
  )
}


