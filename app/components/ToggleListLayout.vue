<script>
export default {
  props: {
    columns: {
      type: Number,
      required: true,
    },
  },
  emits: ['gridLayoutChanged'],
  methods: {
    toggleLayout() {
      const newLayout = this.columns === 2 ? 3 : 2
      this.$emit('gridLayoutChanged', newLayout)
    },
  },
}
</script>

<template>
  <UButton color="primary" variant="solid" @click="toggleLayout">
    {{ columns === 2 ? 'Three' : 'Two' }} Columns
  </UButton>
</template>
