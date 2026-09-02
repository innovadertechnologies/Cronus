export function StatCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
