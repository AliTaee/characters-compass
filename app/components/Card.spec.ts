import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Card from './Card.vue'

describe('testing Card.vue', () => {
  const title = 'Sample Title'
  const img = 'https://example.com/sample-image.jpg'

  it('renders the title correctly', () => {
    const wrapper = mount(Card, {
      props: { title, img, imageSize: 'cover' },
    })

    const titleElement = wrapper.find('[data-testid="card-title"]')
    expect(titleElement.exists()).toBe(true)
    expect(titleElement.text()).toBe(title)
  })

  it('renders the image with the correct src', () => {
    const wrapper = mount(Card, {
      props: { title, img, imageSize: 'cover' },
    })

    const imageElement = wrapper.find('[data-testid="image"]')
    expect(imageElement.exists()).toBe(true)
    expect(imageElement.attributes('src')).toBe(img)
    expect(imageElement.attributes('alt')).toBe(title)
  })

  it('sets fallback image on error', async () => {
    const wrapper = mount(Card, {
      props: { title, img, imageSize: 'cover' },
    })

    const imageElement = wrapper.find('[data-testid="image"]')
    expect(imageElement.exists()).toBe(true)
    await imageElement.trigger('error')

    expect(imageElement.attributes('src')).toBe(`https://placehold.co/475/047857/FFF?text=${title}`)
  })

  it('updates imageSrc when img prop changes', async () => {
    const wrapper = mount(Card, {
      props: { title, img, imageSize: 'cover' },
    })

    const newImg = 'https://example.com/new-image.jpg'
    await wrapper.setProps({ img: newImg })

    const imageElement = wrapper.find('[data-testid="image"]')
    expect(imageElement.exists()).toBe(true)
    expect(imageElement.attributes('src')).toBe(newImg)
  })

  it('applies correct CSS class based on imageSize prop', async () => {
    const wrapper = mount(Card, {
      props: { title, img, imageSize: 'square' },
    })

    const imageElement = wrapper.find('[data-testid="image"]')
    expect(imageElement.exists()).toBe(true)
    expect(imageElement.classes()).includes('h-128')
    expect(imageElement.classes()).not.includes('h-64')

    wrapper.setProps({ imageSize: 'cover' })
    await wrapper.vm.$nextTick() // Ensures re-render

    expect(imageElement.classes()).includes('h-64')
    expect(imageElement.classes()).not.includes('h-128')
  })
})
