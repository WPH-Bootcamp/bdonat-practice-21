import { Button } from "./Button";

type Props = {
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div style={{ border: "1px solid #ffb4b4", padding: 12 }}>
      <p style={{ color: "crimson", margin: 0 }}>{message}</p>
      {onRetry && (
        <div style={{ marginTop: 8 }}>
          <Button onClick={onRetry}>Retry</Button>
        </div>
      )}
    </div>
  );
}
