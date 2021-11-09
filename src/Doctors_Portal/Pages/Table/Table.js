import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";

const TableComponent = ({ appointments }) => {
  const statusHandler = (id) => {
    const status = { status: "Visited" };
    axios.put(`https://doctors-portal-backend-server.herokuapp.com/appointments/${id}`, status);
  };

  return (
    <Paper sx={{ boxShadow: 0 }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Patient Info</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Schedule</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map(
              ({ _id, date, serviceName, name, number, time, status }) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                  <TableCell>
                    {name} <br />{" "}
                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                      {" "}
                      {number}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ fontSize: "10px", fontWeight: "bold" }}>
                      {date}
                    </span>{" "}
                  </TableCell>
                  <TableCell>
                    <div
                      style={{
                        fontWeight: "bold",
                        wordWrap: "break-word",
                        width: "100px",
                      }}
                    >
                      {serviceName}
                    </div>
                    <div
                      style={{
                        wordWrap: "break-word",
                        width: "100px",
                        marginTop: "5px",
                      }}
                    >
                      {time}
                    </div>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {!status ? (
                      <span
                        style={{
                          backgroundColor: "#b6feff",
                          padding: "10px 10px",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          color: "#535353",
                        }}
                      >
                        Not Visit
                      </span>
                    ) : (
                      <span
                        style={{
                          backgroundColor: "#007714",
                          padding: "10px 10px",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          color: "#fff",
                        }}
                      >
                        {status}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => statusHandler(_id)}
                      variant="contained"
                      sx={{ backgroundColor: "#19D3AE" }}
                    >
                      Visit
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default TableComponent;
