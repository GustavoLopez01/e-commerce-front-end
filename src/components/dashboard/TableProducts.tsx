import { SquarePen, Trash2 } from "lucide-react";

export default function TableProducts() {
  return (
    <>
      <div className="mt-3 text-black">
        <table className="w-full rounded-sm shadow table-auto border-collapse text-sm">
          <thead className="text-left text-gray-400 bg-gray-100 uppercase">
            <tr>
              <th className="font-normal py-3 pl-4 rounded-tl-sm">producto</th>
              <th className="font-normal text-center">categoría</th>
              <th className="font-normal text-center">precio</th>
              <th className="font-normal text-center">stock</th>
              <th className="font-normal text-center">rating</th>
              <th className="font-normal text-center rounded-tr-md">acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-20">
              <td>
                <div className="flex items-center gap-1 pl-4">
                  <img
                    className="rounded-md"
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
                    width={50}
                    height={50}
                  />
                  <p className="flex flex-col pl-2">
                    Laptop Pro 15
                    <span>
                      Potente laptop para profesionales con
                    </span>
                  </p>
                </div>
              </td>
              <td className="text-center">
                Electrónica
              </td>
              <td className="text-center">
                1200
              </td>
              <td className="text-center">
                20
              </td>
              <td className="text-center">
                3.65
              </td>
              <td>
                <div className="flex gap-3 justify-center items-center">
                  <SquarePen className="text-blue-500 cursor-pointer size-5" />
                  <Trash2 className="text-red-500 cursor-pointer size-5" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
