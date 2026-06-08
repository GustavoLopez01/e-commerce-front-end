

type TitleSectionStore = {
  title: string
}

export default function TitleSectionStore({
  title
}: TitleSectionStore) {
  return (
    <h1 className="text-3xl py-10">
      {title}
    </h1>
  )
}
