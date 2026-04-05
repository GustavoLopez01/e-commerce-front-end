import { DollarSign, PackageSearch, TriangleAlert } from "lucide-react"

type CardProps = {
  title: string
  value: string | number
  icon: string
  iconColor: string
}

function renderIcon(type: string) {
  switch (type) {
    case "warning":
      return (
        <TriangleAlert />
      )
    case "product":
      return (
        <PackageSearch />
      )
    default:
      return (
        <DollarSign />
      )
  }
}

export default function Card({
  title,
  value,
  icon,
  iconColor
}: CardProps) {
  return (
    <div className="bg-white flex items-center justify-between px-6 py-4 text-black shadow rounded-xl">
      <p className="flex flex-col gap-1 text-[14px]">
        {title}
        <span className="font-bold text-[30px]">
          {value}
        </span>
      </p>

      <div className={`rounded-md p-2 ${iconColor}`}>
        {renderIcon(icon)}
      </div>
    </div>
  )
}
