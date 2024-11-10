import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('gridLayout', {
  state: () => ({
    columns: 2,
  }),
  actions: {
    setColumns(newColumns: number) {
      this.columns = newColumns
    },
  },
})