<script>
export default {
  emits: ['update:gridLayout'],
  data() {
    return {
      columns: 2,
    }
  },
  methods: {
    toggleLayout() {
      const newLayout = this.columns === 2 ? 3 : 2
      this.columns = newLayout
      this.$emit('update:gridLayout', newLayout)
    },
  },
}
</script>

<template>
  <UButton color="primary" variant="solid" @click="toggleLayout">
    {{ columns === 2 ? 'Three' : 'Two' }} Columns
  </UButton>
</template>
