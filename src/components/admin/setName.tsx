import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";

const SetName = () => {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [cash, setCash] = useState("");
    const save = (key: string, value: string) => () => {
        localStorage.setItem(key, value);
    }
    return (
        <Container>
            <Grid container justifyContent={"center"} pt={2}>
                <Typography
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                    fontFamily={"cursive"}
                    color={"white"}
                >
                    Set My Info
                </Typography>
            </Grid>
            <Grid container display={"flex"} direction={'column'} alignItems={"center"} justifyContent={"center"} mt={2} gap={1}>
                <Stack direction='row' gap={2}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Please set your name."
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => setName("")}>
                            <ClearIcon />
                        </IconButton>
                    </Paper>
                    <Button variant="contained" onClick={save('crash_name', name)}>Save</Button>
                </Stack>
                <Stack direction='row' gap={2}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Please set your photo."
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => setPhoto(e.target.value)}
                            value={photo}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => setPhoto("")}>
                            <ClearIcon />
                        </IconButton>
                    </Paper>
                    <Button variant="contained" onClick={save('crash_image', photo)}>Save</Button>
                </Stack>
                <Stack direction='row' gap={2}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            type="number"
                            placeholder="Please set your money."
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => setCash(e.target.value)}
                            value={cash}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => setCash("")}>
                            <ClearIcon />
                        </IconButton>
                    </Paper>
                    <Button variant="contained" onClick={save('crash_cash', cash)}>Save</Button>
                </Stack>
            </Grid>
        </Container>
    );
};

export default SetName;
