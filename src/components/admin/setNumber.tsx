import { useEffect, useState } from "react";
// import { useCrashContext } from "../Main/context";
import {
  setNumberFunc,
  getNumberFunc,
  updateNumberFunc,
  deleteNumberFunc,
  deleteAllNumbersFunc,
} from "../../context";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import ClearIcon from "@mui/icons-material/Clear";

// for table
// function createData(amount: Number) {
//   return { amount };
// }

// const rows = [createData(12)];
// for modal

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const SetNumber = () => {
  // for modal
  const [amount, setAmount] = useState<string>();

  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [selectedData, setSelectedData] = useState({ _id: "" });

  const [rows, setRows] = useState([]);

  const handleOpen = (statu) => {
    setState(statu);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const saveNumber = async () => {
    if (typeof amount === "string") {
      amount.split(",").map(async (item: string | number) => {
        item = Number(item);
        if (Number(item) && Number(item) > 0) {
          await setNumberFunc(Number(item));
        }
        getRows();
        handleClose();
      });
    }
  };
  const updateNumber = async () => {
    const data = { _id: selectedData._id, amount };
    await updateNumberFunc(data);
    getRows();
    handleClose();
  };
  const deleteNumber = async (_id) => {
    await deleteNumberFunc(_id);
    getRows();
    handleClose();
  };

  const deleteAllNumbers = async () => {
    await deleteAllNumbersFunc();
    getRows();
    handleClose();
  };

  const getRows = async () => {
    let { data } = await getNumberFunc();
    if (data) {
      setRows(data);
    }
  };

  const selectData = (data) => {
    console.log(data);
    setSelectedData(data);
    setAmount(data.amount);
    handleOpen(true);
  };
  useEffect(() => {
    getRows();
  }, []);
  return (
    <Container>
      <Grid container justifyContent={"center"} pt={2}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.5rem"}
          fontFamily={"cursive"}
          color={"white"}
        >
          Set Numbers
        </Typography>
      </Grid>
      <Grid gap={2} container justifyContent={"flex-end"}>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteAllNumbers()}
        >
          DELETE ALL
        </Button>
        <Button variant="contained" onClick={() => handleOpen(false)}>
          Add
        </Button>
      </Grid>
      <Grid container pt={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row: any, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.amount}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      size={"small"}
                      onClick={() => selectData(row)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size={"small"}
                      color="error"
                      onClick={() => deleteNumber(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "black" }}
              >
                {state ? "Change the" : "Add new"} Number
              </Typography>
            </Box>
            <IconButton aria-label="delete" size="medium" onClick={handleClose}>
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Stack direction={"row"} gap={"10px"} pt={1}>
            <TextField
              type={"string"}
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              size="small"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                if (state) {
                  updateNumber();
                } else {
                  saveNumber();
                }
              }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default SetNumber;
