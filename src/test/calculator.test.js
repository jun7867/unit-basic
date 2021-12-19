const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  // 각각 테스트는 독립적이여야 해서 선언은 각 테스트에서 선언해줘야 한다.
  // 매번 반복되는 선언인 경우 beforeEach를 통해서 중복을 피해준다.
  // 모든 테스트가 실행되기 전에 beforeEach가 실행된다.
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it('clear', () => {
    cal.set(5);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  // 나누기
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === NaN', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
  });
});
