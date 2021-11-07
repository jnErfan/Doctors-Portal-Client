import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const TableComponent = () => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: 0 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Schedule</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Karim Ahmed</TableCell>
              <TableCell>7:00 PM</TableCell>
              <TableCell>
                <span
                  style={{
                    backgroundColor: "#b6feff",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    color: "#8B8888",
                  }}
                >
                  Not Visit
                </span>{" "}
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{ backgroundColor: "#19D3AE" }}>
                  Visit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default TableComponent;
