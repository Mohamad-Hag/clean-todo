import { WithMultipleOrOneChildren } from "utils/interfaces/WithChildren";

interface ConditionalRenderer extends WithMultipleOrOneChildren {
  condition?: boolean;
}

export default function ConditionalRenderer({
  condition = true,
  children,
}: ConditionalRenderer) {
  return condition ? <>{children}</> : null;
}
