export const priorityArray = ["low", "medium", "high"] as const;
type Priority = typeof priorityArray[number];
export default Priority;
