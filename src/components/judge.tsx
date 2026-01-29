import { useState } from "react";

type Props = {
  values: number[];
  value: number;
};

function allSums(a: number[]): number[] {
  const result: number[] = [];

  function dfs(index: number, currentSum: number) {
    if (index === a.length) {
      result.push(currentSum);
      return;
    }
    for (let k = 0; k <= 4; k++) {
      dfs(index + 1, currentSum + k * a[index]);
    }
  }

  dfs(0, 0);
  return result;
}

const Judge: React.FC<Props> = ({ values, value }) => {
  const [flag, setFlag] = useState<boolean | null>(null);

  const handleJudge = () => {
    const total = values.length;
    const sums = allSums(values);

    let result = false;
    for (let i = 0; i < sums.length; i++) {
      if (Math.abs(value * total - sums[i]) < 0.1) {
        result = true;
        break;
      }
    }

    setFlag(result);
  };

  return (
    <div>
      <button onClick={handleJudge}>判定する</button>

      {flag !== null && (
        flag ? (
          <div>あなたは単位を落としている可能性があります</div>
        ) : (
          <div>単位を落としている可能性は万に一つにもありません。素晴らしいです</div>
        )
      )}
    </div>
  );
};

export default Judge;
