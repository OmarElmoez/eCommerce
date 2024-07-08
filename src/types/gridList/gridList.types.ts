type TGridListProps<T> = {
  records: T[];
  renderItems: (item: T) => React.ReactNode;
  emptyMsg: string
}

type HasId = {
  id: number
}

export type { HasId }

export default TGridListProps