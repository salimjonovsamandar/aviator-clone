import { useEffect, useState } from "react";
// import { useCrashContext } from "../Main/context";
import {
  addBotUserFunc,
  getBotUsersFunc,
  updateBotUserFunc,
  deleteBotUserFunc,
  deleteBotUsersFunc,
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

const imgs = [
  "av-1.png",
  "av-2.png",
  "av-3.png",
  "av-4.png",
  "av-5.png",
  "av-6.png",
  "av-7.png",
  "av-8.png",
  "av-9.png",
];

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

const SetUsers = () => {
  // for modal
  const [user, setUser] = useState<String>();
  const [userImage, setUserImage] = useState<string>('');

  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [selectedData, setSelectedData] = useState({ _id: "" });

  const [rows, setRows] = useState([]);

  const handleOpen = (statu) => {
    setState(statu);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const addBotUser = async () => {
    if (user) {
      await addBotUserFunc(String(user), userImage || imgs[Math.ceil(Math.random() * 9)]);
      getRows();
      handleClose();
    }
  };
  const updateBotUser = async () => {
    const data = { _id: selectedData._id, name: user, img: userImage };
    await updateBotUserFunc(data);
    getRows();
    handleClose();
  };
  const deleteBotUser = async (_id) => {
    await deleteBotUserFunc(_id);
    getRows();
    handleClose();
  };

  const deleteBotUsers = async () => {
    await deleteBotUsersFunc();
    getRows();
    handleClose();
  };

  const getRows = async () => {
    let { data } = await getBotUsersFunc();
    if (data) {
      setRows(data);
    }
  };

  const selectData = (data) => {
    setSelectedData(data);
    setUser(data.name);
    setUserImage(data.img)
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
          Set Users
        </Typography>
      </Grid>
      <Grid container gap={2} justifyContent={"flex-end"}>
        <Button variant="contained" color={"error"} onClick={() => deleteBotUsers()}>
          Delete all users
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
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
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
                    <img src={`./avatars/${row.img}`} alt='logo' width={'30px'}/>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
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
                      onClick={() => deleteBotUser(row._id)}
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
                {state ? "Change the" : "Add new"} User
              </Typography>
            </Box>
            <IconButton aria-label="delete" size="medium" onClick={handleClose}>
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          <Stack direction={"row"} gap={"10px"} pt={1}>
            <Stack direction={"column"} gap={2}>
              <TextField
                id="outlined-basic"
                label="User"
                variant="outlined"
                size="small"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="ImageName"
                variant="outlined"
                size="small"
                value={userImage}
                onChange={(e) => setUserImage(e.target.value)}
                />
            </Stack>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                if (state) {
                  updateBotUser();
                } else {
                  addBotUser();
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

export default SetUsers;
