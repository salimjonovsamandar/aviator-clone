import { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
interface ReportCompleteProps extends CustomContentProps {
  allowDownload?: boolean;
}

const ReportComplete = forwardRef<HTMLDivElement, ReportCompleteProps>(
  ({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);
    setTimeout(() => {
      closeSnackbar(id);
    }, 3000);
    return (
      <SnackbarContent ref={ref}>
        <Card
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#123405",
            border: "solid 1px #427f00",
            borderRadius: "40px",
          }}
        >
          <CardActions sx={{ padding: 0.6 }}>
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
              <Stack direction={"column"} alignItems={"center"}>
                <Typography variant="body2" color={"#b7a9a9"}>
                  {JSON.parse(String(props.message)).message}
                </Typography>
                <Typography variant="body2" color={"white"}>
                  {JSON.parse(String(props.message)).target} X
                </Typography>
              </Stack>
              <Stack
                direction={"column"}
                alignItems={"center"}
                sx={{
                  position: "relative",
                }}
                className="win_amount"
              >
                <Typography variant="body2" color={"white"} fontWeight={"bold"}>
                  Win,USD
                </Typography>
                <Typography variant="body2" color={"white"} fontWeight={"bold"}>
                  {JSON.parse(String(props.message)).amount}
                </Typography>
              </Stack>
              <div>
                <IconButton
                  size="small"
                  sx={{ color: "grey" }}
                  onClick={handleDismiss}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            </Stack>
          </CardActions>
        </Card>
      </SnackbarContent>
    );
  }
);

ReportComplete.displayName = "ReportComplete";

export default ReportComplete;
