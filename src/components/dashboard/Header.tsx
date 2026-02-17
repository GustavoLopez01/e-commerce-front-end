import Card from "./Card";

const OPTIONS = [
  {
    title: "Total de productos",
    value: 12,
    icon: "product",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Valor del inventario",
    value: "115,834.26",
    icon: "",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Stock Bajo",
    value: 3,
    icon: "warning",
    color: "bg-red-100 text-red-600"
  }
]

export default function Header() {
  return (
    <>
      <div className="my-5">
        <h2 className="text-black font-bold text-2xl">
          Gestiona tu inventario
        </h2>

        <div className="grid gap-3 md:grid-cols-3">
          {OPTIONS.map(opt => (
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
