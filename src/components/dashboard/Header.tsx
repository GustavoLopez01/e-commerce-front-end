import { useMemo } from "react";
import Card from "./Card";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../helpers/string-functions";

type HeaderProps = {
  products: Product[]
}

export default function Header({
  products
}: HeaderProps) {

  const informationHeader = useMemo(() => {
    return [
      {
        title: "Total de productos",
        value: products.length,
        icon: "product",
        color: "bg-blue-100 text-blue-600"
      },
      {
        title: "Valor del inventario",
        value: formatCurrency(products.reduce((acc, product) =>
          acc + product.price, 0
        )),
        icon: "",
        color: "bg-green-100 text-green-600"
      },
      {
        title: "Stock Bajo",
        value: products.filter(item =>
          item.quantity <= 10
        ).length,
        icon: "warning",
        color: "bg-red-100 text-red-600"
      }
    ]
  }, [products]);

  return (
    <>
      <div className="my-5">
        <div className="grid gap-3 md:grid-cols-3">
          {informationHeader.map(opt => (
            <Card
              key={opt.title}
              title={opt.title}
              value={opt.value}
              icon={opt.icon}
              iconColor={opt.color}
            />
          ))}
        </div>
      </div>
    </>
  )
}
