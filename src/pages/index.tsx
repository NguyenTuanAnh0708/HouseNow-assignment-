import type { FilterTabType } from '@/client/constant/todoApp'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import { FILTER_TABS } from '@/client/constant/todoApp'
import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [currentFilter, setCurrentFilter] = useState<FilterTabType>(
    FILTER_TABS[0] as FilterTabType
  )
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="TabsRoot" defaultValue={currentFilter}>
          <Tabs.List
            className="TabsList flex gap-x-2 pt-10"
            aria-label="Manage your account"
          >
            {FILTER_TABS.map((filter, idx) => (
              <Tabs.Trigger
                key={idx}
                className={clsx(
                  'TabsTrigger rounded-[9.999px] border border-[#E2E8F0] px-6 py-3',
                  {
                    'bg-[#334155] text-white': currentFilter == filter,
                  }
                )}
                value="filter"
                onClick={() => setCurrentFilter(filter)}
              >
                {filter}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList filterTab={currentFilter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
