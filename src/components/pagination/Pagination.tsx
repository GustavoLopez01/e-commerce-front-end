import { Paginator, type PaginatorPageChangeEvent } from "primereact/paginator";
import { useState } from "react";

export default function Pagination() {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  }
  return (
    <>
      <div className="">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
          pt={{
            firstPageButton: () => ({
              className: `
                relative inline-flex items-center justify-center user-none overflow-hidden leading-none border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md transition duration-200
              `
            }),
          }}
        />
      </div>
    </>
  )
}
