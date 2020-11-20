import { solution, solution1 } from '../min-dictionary-sequence-str'

test('能正确的获得最小字典序字符串', () => {
    expect(solution('ACDBCB')).toBe('ABCBCD')
    expect(solution1('ACDBCB')).toBe('ABCBCD')
    expect(solution1('newbee')).toBe('eebnew')
})
