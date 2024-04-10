import * as React from "react";
import "./WorkersTable.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import WorkerOptions from "../../store/WorkerOptions";
import { observer } from "mobx-react";
import ExportTable from "./ExportTable";
import { format } from "date-fns";
import {Outlet } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Edit from "../options/Edit";
import Delete from "../options/Delete";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@mui/material/TextField";
import PositionDetailsWorker from "../options/PositionDetailsWorker";

const columns = [
  {
    id: "firstName",
    label: <strong>FIRST NAME:</strong>,
    minWidth: 50,
    align: "center",
  },
  {
    id: "lastName",
    label: <strong>LAST NAME:</strong>,
    minWidth: 50,
    align: "center",
  },
  {
    id: "tz",
    label: <strong>TZ:</strong>,
    minWidth: 50,
    align: "center",
  },
  {
    id: "dateOfStartingWork",
    label: <strong>Date of joining the company:</strong>,
    minWidth: 100,
    align: "center",
  },
  {
    id: "options",
    minWidth: 100,
    align: "center",
  },
];

function createData(firstName, lastName, tz, dateOfStartingWork) {
  return {
    options: {
      edit: <Edit />,
      delete: <Delete />,
      positionDetails: <PositionDetailsWorker />,
    },
    firstName,
    lastName,
    tz,
    dateOfStartingWork,
  };
}

const WorkersTable = observer(() => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const tableRef = useRef(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  useEffect(() => {
    WorkerOptions.getWorkers();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      const filteredWorkers = WorkerOptions.listWorkers.filter(
        (worker) => worker.status === true
      );
      setFilteredRows(
        filteredWorkers.map((item) =>
          createData(
            item.firstName,
            item.lastName,
            item.tz,
            item.dateOfStartingWork
          )
        )
      );
    } else {
      const filtered = WorkerOptions.listWorkers.filter((item) =>
        Object.values(item).some((value) =>
          typeof value === "string" || typeof value === "number"
            ? value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            : false
        )
      );
      const filteredWithStatus = filtered.filter(
        (worker) => worker.status === true
      );
      setFilteredRows(
        filteredWithStatus.map((item) =>
          createData(
            item.firstName,
            item.lastName,
            item.tz,
            item.dateOfStartingWork
          )
        )
      );
    }
  }, [searchQuery, WorkerOptions.listWorkers]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedRowIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredRows.length - 1)
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedRowIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedRowIndex, filteredRows]);

  useEffect(() => {
    if (tableRef.current && selectedRowIndex !== -1) {
      const selectedRow = tableRef.current.querySelector(
        `[data-row-index="${selectedRowIndex}"]`
      );
      if (selectedRow) {
        selectedRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [selectedRowIndex]);
  const highlightText = (text, query) => {
    if (!text || !query) {
      return text;
    }
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span
              key={index}
              style={{ backgroundColor: "orange", fontWeight: "bold" }}
            >
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="responsive">
      <div className="searchAndExport">
        <ExportTable data={filteredRows} />
        <Tooltip title="search to filter" arrow>
          <TextField
            hiddenLabel
            style={{ marginLeft: "10px", width: "15vw" }}
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    sx={{
                      "&:focus": {
                        borderColor: "black",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Tooltip>
      </div>
      <Paper
        className="table"
        style={{
          width: "80vw",
          overflowX: "auto",
          flexGrow: "1",
          overflowY: "auto",
        }}
      >
        <TableContainer style={{ height: `${10 * 8}vh`, overflowX: "auto" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "#80cbc4",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    style={{ textAlign: "center", color: "black" }}
                  >
                    No data in the system
                  </TableCell>
                </TableRow>
              ) : (
                filteredRows.map((row, index) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    data-row-index={index}
                    selected={index === selectedRowIndex}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "options" ? (
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              position: "relative",
                              right: "0",
                            }}
                          >
                            <div>
                              <Edit data={row.tz} />
                            </div>
                            <div>
                              <Delete data={row.tz} />
                            </div>
                            <div>
                              <PositionDetailsWorker data={row.tz} />
                            </div>
                          </div>
                        ) : column.id === "dateOfStartingWork" ? (
                          highlightText(
                            format(new Date(row[column.id]), "dd/MM/yyyy"),
                            searchQuery
                          )
                        ) : (
                          highlightText(row[column.id], searchQuery)
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Outlet />
    </div>
  );
});

export default WorkersTable;
