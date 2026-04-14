
const OPTIONS = [
  { label: "10", value: 10 },
  { label: "25", value: 25 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
];

type SelectorProps = {
  currentRegister: number
}

export default function Selector({
  currentRegister
}: SelectorProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="font-family-inter-bold">
          Registros
        </span>

        <select
          className="border rounded-md w-15 text-center p-2"
          onChange={(e) => { }}
          defaultValue={OPTIONS[0].value}
        >
          {OPTIONS.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
