import constructExportData from "./constructExportData";

export default function downloadExportData() {
  let filename = "clean-todo-data.json";
  let exportData = constructExportData();
  const blob = new Blob([exportData], { type: "text/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
