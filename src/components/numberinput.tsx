type NumberInputProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const NumberInput: React.FC<NumberInputProps> = ({ value, setValue }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "45%",
    margin: "0 auto",  }}>
    <input 
      type="number"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
    </div>
  );
};

export default NumberInput;
