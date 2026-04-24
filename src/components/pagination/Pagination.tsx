import { useState } from "react";
import {
  Paginator,
  type PaginatorPageChangeEvent
} from "primereact/paginator";

type PaginationProps = {
  totalRecords: number
  rows: number
  rowsPerPageOptions?: number[]
  onPageChange: (event: PaginatorPageChangeEvent) => void
}

export default function Pagination({
  totalRecords,
  rows,
  rowsPerPageOptions,
  onPageChange
}: PaginationProps) {
  // const onPageChange = (event: PaginatorPageChangeEvent) => {
  //   setFirst(event.first);
  //   setRows(event.rows);
  // }

  return (
    <>
      <div className="">
        <Paginator
          first={0}
          rows={rows}
          totalRecords={totalRecords}
          // rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
          pt={{
            root(options) {
              return {
                ...options,
                className: "flex flex-wrap mt-4"
              }
            },
            firstPageButton(options) {
              return {
                ...options,
                className: "cursor-pointer p-2 border rounded-l-md hover:bg-gray-100"
              }
            },
            lastPageButton(options) {
              return {
                ...options,
                className: "cursor-pointer p-2 border rounded-r-md hover:bg-gray-100"
              }
            },
            pageButton(options) {
              return {
                ...options,
                className: `
                  cursor-pointer p-2 border hover:bg-gray-100
                  ${options?.context?.active ? 'bg-blue-600 text-white' : 'bg-white text-black'}
                `
              }
            },
            prevPageButton(options) {
              return {
                ...options,
                className: "cursor-pointer p-2 border hover:bg-gray-100"
              }
            },
            nextPageButton(options) {
              return {
                ...options,
                className: "cursor-pointer p-2 border hover:bg-gray-100"
              }
            },
          }}
        />
      </div>
    </>
  )
}
