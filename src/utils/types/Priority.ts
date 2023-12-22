export const priorityArray = ["low", "medium", "high"] as const;
type Priority = (typeof priorityArray)[number];
export const defaultPriority = priorityArray[1];
export default Priority;
