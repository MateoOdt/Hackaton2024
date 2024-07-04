import { Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function LeftPannel({ onClose }: { onClose: () => void }) {
  return (
    <Grid
      sx={{
        width: "300px",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{
          padding: "10px",
        }}
      >
        <Typography fontWeight={600}>Information Pannel</Typography>
        <IconButton
          onClick={onClose}
          sx={{
            marginLeft: "auto",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid
        sx={{
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <strong>Name :</strong> John Doe
        </Typography>
        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <strong>Mail :</strong> john.doe@estiam.com
        </Typography>
        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <strong>Created Date :</strong> 2021-10-10
        </Typography>
        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <strong>Expiration Date :</strong> 2021-10-10
        </Typography>
        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <strong>Expiration Date :</strong> 2021-10-10
        </Typography>
      </Grid>
    </Grid>
  );
}
