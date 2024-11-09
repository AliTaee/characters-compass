import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import type { CharAttributes } from '~/types/data-transformer'
import CharDetailList from './CharDetailList.vue'

const mockAttributes: CharAttributes = [
  { name: 'Rick Sanchez' },
  { species: 'Human' },
  { status: 'Alive' },
]

describe('testing CharDetailList.vue', () => {
  it('renders a list of attributes', () => {
    const wrapper = mount(CharDetailList, {
      props: {
        attributes: mockAttributes,
      },
    })

    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(mockAttributes.length)

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
    expect(wrapper.find('[data-testid="attributes"]').exists()).toBe(false)
  })
})
