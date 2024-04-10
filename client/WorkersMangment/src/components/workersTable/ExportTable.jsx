import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Tooltip from "@mui/material/Tooltip";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
const ExportTable = ({ data, filename }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData) => {
    // Exclude the first column from each row
    const modifiedCsvData = csvData.map((row) => {
      const { [Object.keys(row)[0]]: firstColumnToRemove, ...restOfColumns } =
        row;
      return restOfColumns;
    });

    const ws = XLSX.utils.json_to_sheet(modifiedCsvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "workers table" + fileExtension);
  };

  return (
    <div
      onClick={(e) => exportToCSV(data, filename)}
      style={{ cursor: "pointer" }}
    >
      <Tooltip title="download an Excel table" arrow>
        <DownloadForOfflineIcon
          sx={{
            fontSize: 30,
            "&:hover": {
              opacity: "0.7",
            },
          }}
        />
      </Tooltip>
    </div>
  );
};

export default ExportTable;
