import { useState } from "react";

type Props = {
  values: number[];
  value: number;
};
function allSums(a: number[]): number[] {
  const result: number[] = [];

  function dfs(
    index: number,
    currentSum: number,
    usedZero: boolean
  ) {
    if (index === a.length) {
      if (usedZero) {
        result.push(currentSum);
      }
      return;
    }

    for (let k = 0; k <= 4; k++) {
      dfs(
        index + 1,
        currentSum + k * a[index],
        usedZero || k === 0
      );
    }
  }

  dfs(0, 0, false);
  return result;
}
function DPjudge (values:number[],value:number){
  let total:number =0;
  for(let i = 0;i<values.length;i++){
    total+=values[i];
  }
  const GPA:number =Math.round(total*value);
  const DP:number[]=new Array(GPA+2).fill(0);
  DP[0]=1;
  for(let i = 0;i<values.length;i++){
    let update:number[]=[];
    for(let k=1;k<5;k++){
      for(let j=0;j<GPA+2;j++){
      if(DP[j]===1&&k===1){
        update.push(j);
      }
      if(j>=k*values[i]){
        if(DP[j-k*values[i]]>0&&DP[j]===0){
          update.push(j);
        }
      }
    }
    }
    for(let j=0;j<update.length;j++){
      DP[update[j]]++;
    }
  }
  if(DP[GPA]>1||DP[GPA+1]>1||DP[GPA-1]>1){
    return true;
  }
  else{
    return false;
  }
}

const Judge: React.FC<Props> = ({ values, value }) => {
  const [flag, setFlag] = useState<boolean | null>(null);
  const handleJudge = () => {
    let total = 0;
    for(let i=0;i<values.length;i++){
        total+=values[i];
    }
    const sums = allSums(values);

    const gpa100 = Math.round(value * 100);
    const target = gpa100 * total;
    let result = false;
    for (let i = 0; i < sums.length; i++) {
        const sum100 = sums[i] * 100;
        console.log(sums[i]);
      if (Math.abs(target - sum100) < 1) {
        result = true;
        break;
      }
    }
    result = DPjudge(values,value);
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
