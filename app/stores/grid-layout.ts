import { defineStore } from 'pinia'
import type { ToggleLayoutType } from '~/types'

export const useLayoutStore = defineStore('gridLayout', {
  state: () => ({
    columns: 'grid' as ToggleLayoutType,
  }),
  actions: {
    setColumns(newColumns: ToggleLayoutType) {
      this.columns = newColumns
    },
  },
})
