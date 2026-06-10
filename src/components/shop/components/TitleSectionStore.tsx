

type TitleSectionStore = {
  title: string
  classNames?: string
}

export default function TitleSectionStore({
  title,
  classNames
}: TitleSectionStore) {
  return (
    <h1 className={`text-3xl py-10 ${classNames}`}>
      {title}
    </h1>
  )
}
