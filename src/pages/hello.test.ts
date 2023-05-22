import { mul } from '@/pages/index'

describe('index file test', () => {
  test('multi func test', () => {
    const result = mul(1, 3)

    expect(result).toBe(3)
  })
})
