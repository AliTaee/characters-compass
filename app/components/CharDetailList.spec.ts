import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CharDetailList from './CharDetailList.vue'
import type { CharAttributes } from '~/types/data-transformer'

// Mock data for attributes prop
const mockAttributes: CharAttributes = [
  { name: 'Rick Sanchez' },
  { species: 'Human' },
  { status: 'Alive' }
]

describe('testing CharDetailList.vue', () => {
  it('renders a list of attributes', () => {
    const wrapper = mount(CharDetailList, {
      props: {
        attributes: mockAttributes,
      },
    })

    // Check if the component renders the expected number of list items
    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(mockAttributes.length)

    // Check each attribute renders correctly
    mockAttributes.forEach((attribute, index) => {
      const [key] = Object.keys(attribute)
      const [value] = Object.values(attribute)
      const listItem = listItems[index]
      
      expect(listItem?.find('[data-testid="attribute-key"]').text()).toBe(key)
      expect(listItem?.find('[data-testid="attribute-value"]').text()).toBe(value)
    })
  })

  it('does not render anything if attributes prop is not provided', () => {
    const wrapper = mount(CharDetailList, {
      props: {
        attributes: undefined,
      },
    })
    console.log(wrapper.html())
    expect(wrapper.find('[data-testid="attributes"]').exists()).toBe(false) // should not render anything
  })
})