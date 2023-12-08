import { WithMultipleOrOneChildren } from "utils/interfaces/WithChildren";

interface ConditionalRenderer extends WithMultipleOrOneChildren {
  condition?: boolean;
  replaceWith?: React.ReactNode | React.ReactElement;
}

export default function ConditionalRenderer({
  condition = true,
  children,
  replaceWith,
}: ConditionalRenderer) {
  return condition ? <>{children}</> : replaceWith ? <>{replaceWith}</> : null;
}
