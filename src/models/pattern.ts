import { identity } from 'lodash';
import { PatternValue } from '../schema';

export class Pattern {
  constructor(private id: string, private data: PatternValue) {}

  get transformFunction() {
    return this.data.unit === 'time' ? exponentialGrowth : Math.round;
  }

  get inverseExponentialGrowth() {
    return this.data.unit === 'time' ? inverseExponentialGrowth : identity;
  }
}

export function exponentialGrowth(baseValue: number) {
  const val = baseValue ** 1.4 + 1.08 ** baseValue;
  return Math.round(val / 5) * 5;
}

export function inverseExponentialGrowth(
  y: number,
  initialGuess: number = 1,
  tolerance: number = 0.1
): number {
  let x = initialGuess;
  while (Math.abs(y - exponentialGrowth(x)) > tolerance) {
    const f = Math.pow(x, 1.4) + Math.pow(1.08, x) - y;
    const df = 1.4 * Math.pow(x, 0.4) + Math.log(1.08) * Math.pow(1.08, x);
    x = x - f / df;
  }
  return Math.round(x * 100) / 100;
}
