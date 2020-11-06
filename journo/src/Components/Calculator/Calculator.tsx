import React from 'react';
import './Calculator.css';

function validateDigits(input: string) {
  return /^[1-9]\d{0,2}$/.test(input);
}

function preCalculateRatios() {
  const ratios: any = {};
  for (let val of [10, 9, 8, 7, 6, 5, 4, 3, 2]) {
    for (let i = 1; i < val; i++) {
      let ratio = i / val;
      ratios[ratio] = `${i} in ${val}`;
    }
  }
  return ratios;
}

function gcd(a: number, b: number): number {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function findBaseRatio(num: number, b = true) {
  let greatestCommonFactor = gcd(num, 100);
  if (greatestCommonFactor > 1) {
    return `${num / greatestCommonFactor} in ${100 / greatestCommonFactor}`;
  } else {
    return `${num} in ${100}`;
  }
}

class Calculator extends React.Component<
  {},
  { value: number; results: string[]; error: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { value: 100, results: ['1 in 1'], error: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    let num = parseInt(event.target.value);
    if (!validateDigits(event.target.value) || num > 100 || num < 0) {
      this.setState({
        value: event.target.value,
        results: [],
        error: 'Invalid Value.'
      });
    } else {
      let baseRatio = findBaseRatio(num, false);

      const result_percentages = [baseRatio];
      const ratios = preCalculateRatios();
      const keys = Object.keys(ratios).sort();

      let bigger = true;
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === (num / 100).toString()) {
          if (i < keys.length - 1) {
            result_percentages.push(
              `Less than ${ratios[keys[i + 1]]} (${(
                parseFloat(keys[i + 1]) * 100
              ).toFixed(1)}%)`
            );
          }
          if (i > 0) {
            result_percentages.push(
              `More than ${ratios[keys[i - 1]]} (${(
                parseFloat(keys[i - 1]) * 100
              ).toFixed(1)}%)`
            );
          }
          bigger = false;
        }
        if (parseFloat(keys[i]) > num / 100 && bigger) {
          result_percentages.push(
            `Less than ${ratios[keys[i]]} (${(
              parseFloat(keys[i]) * 100
            ).toFixed(1)}%)`
          );

          if (i > 0) {
            result_percentages.push(
              `More than ${ratios[keys[i - 1]]} (${(
                parseFloat(keys[i - 1]) * 100
              ).toFixed(1)}%)`
            );
          }
          bigger = false;
        }
      }

      this.setState({
        value: event.target.value,
        results: result_percentages,
        error: ''
      });
    }
  }

  render() {
    const result_percentages = [];

    for (const value of this.state.results) {
      result_percentages.push(
        <div>
          {value}
          <br />
        </div>
      );
    }

    return (
      <div>
        <form>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            autoFocus={true}
            size={3}
            maxLength={3}
          />{' '}
          %
        </form>
        <p>
          <span style={{ color: 'red' }}>{this.state.error}</span>
          {result_percentages}
        </p>
      </div>
    );
  }
}

export default Calculator;
