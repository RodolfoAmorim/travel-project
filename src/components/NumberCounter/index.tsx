import { NumberValueContainer } from "./styles";

interface NumberCounterProps {
  numberTitle: string;
  numberValue: number;
}

export function NumberCounter({
  numberTitle,
  numberValue,
}: NumberCounterProps) {
  const NumberValuesTotal = () => {
    return Math.abs(numberValue) > 999
      ? Math.sign(numberValue) *
          parseFloat((Math.abs(numberValue) / 1000).toFixed(1)) +
          "k+"
      : Math.sign(numberValue) * Math.abs(numberValue);
  };

  return (
    <NumberValueContainer>
      <h3>{NumberValuesTotal()}</h3>
      <p>{numberTitle}</p>
    </NumberValueContainer>
  );
}
