import { WithMultipleOrOneChildren } from "utils/interfaces/WithChildren";

interface ConditionalRendererProps extends WithMultipleOrOneChildren {
  condition?: boolean;
  replaceWith?: React.ReactNode | React.ReactElement;
}

export default function ConditionalRenderer({
  condition = true,
  children,
  replaceWith,
}: ConditionalRendererProps) {
  return condition ? <>{children}</> : replaceWith ? <>{replaceWith}</> : null;
}
