import ImportExportData from "./interfaces/common/ImportExportData";

export default function readJSONFile(
  fileInput: HTMLInputElement,
  fileLoadCallback: (data: ImportExportData) => void
) {
  if (fileInput.files?.length === 0) {
    console.error("No file chosen");
    return;
  }
  const file = fileInput.files![0];
  const reader = new FileReader();

  reader.onload = () => {
    try {
      let data = JSON.parse(reader.result as string) as ImportExportData;
      fileLoadCallback(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (file.type === "application/json") {
    reader.readAsText(file);
  } else {
    console.error("File is not a JSON file.");
  }
}
