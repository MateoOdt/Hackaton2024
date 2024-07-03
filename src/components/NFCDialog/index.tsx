import {
  CircularProgress,
  DialogContent,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export function NFCDialog({ onClose }: { onClose: () => void }) {
  return (
    <DialogContent
      sx={{
        width: "500px",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Typography variant="h6">Scan your NFC card</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
      <CircularProgress
        color="inherit"
        sx={{ marginTop: 10, marginBottom: 10 }}
      />
    </DialogContent>
  );
}
