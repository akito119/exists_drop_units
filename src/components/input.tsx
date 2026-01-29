type InputProps = {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
};

const Input: React.FC<InputProps> = ({ values, setValues }) => {
  const addInput = () => {
    setValues([...values, 0]);
  };

  const updateValue = (index: number, value: string) => {
    const num = Number(value);
    if (Number.isNaN(num)) return;

    const next = [...values];
    next[index] = num;
    setValues(next);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "45%",
    margin: "0 auto",  }}>
      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={(e) => updateValue(i, e.target.value)}
        />
      ))}

      <button onClick={addInput}>追加</button>
    </div>
  );
};


export default Input