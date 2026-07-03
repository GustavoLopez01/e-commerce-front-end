
type OrdersProps = {
  currentTab: string
}

export default function Orders({
  currentTab
}: OrdersProps) {
  return (
    <section>
      <h1>
        { currentTab }
      </h1>
    </section>
  )
}
