import { defineStore } from 'pinia'
import { ref } from 'vue'

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
