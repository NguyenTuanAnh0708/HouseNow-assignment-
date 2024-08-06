export enum TODO_STATUS {
  COMPLETED = 'completed',
  PENDING = 'pending',
}

type TodoStatusType = 'pending' | 'completed'

export const FILTER_TAB_DATA: Record<
  'All' | 'Pending' | 'Completed',
  TodoStatusType[]
> = {
  All: ['pending', 'completed'],
  Pending: ['pending'],
  Completed: ['completed'],
}

export type FilterTabType = keyof typeof FILTER_TAB_DATA

export const FILTER_TABS: FilterTabType[] = Object.keys(
  FILTER_TAB_DATA
) as FilterTabType[]
