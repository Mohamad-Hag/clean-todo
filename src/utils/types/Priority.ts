export const priorityArray = ["law", "medium", "high"] as const;
type Priority = typeof priorityArray[number];
export default Priority;
