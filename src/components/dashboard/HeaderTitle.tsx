
type HeaderSectionProps = {
  title: string
}

export default function HeaderTitle({
  title
}: HeaderSectionProps) {
  return (
    <>
      <h2 className="w-full text-2xl pt-3 font-family-inter-bold text-black">
        {title}
      </h2>
    </>
  )
}
