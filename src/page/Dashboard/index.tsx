import { ChartLine } from "../../components/ChartLine";
import { Grid, Typography } from "@mui/material";
import { ChartBar } from "../../components/ChartBar";

export function Dashboard() {
  return (
    <div
      className="dashboard"
      style={{
        padding: "8px",
        marginLeft: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid container>
        <Typography
          fontWeight={600}
          fontSize={"24px"}
          sx={{
            mb: "10px",
          }}
        >
          Dashboard
        </Typography>
      </Grid>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        gap="30px"
        sx={{
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "10px",
            background: "rgb(30, 30, 30)",
          }}
        >
          <ChartLine />
        </div>
        <div
          style={{
            padding: "40px",
            borderRadius: "10px",
            background: "rgb(30, 30, 30)",
          }}
        >
          <ChartLine />
        </div>
        <div
          style={{
            padding: "40px",
            borderRadius: "10px",
            background: "rgb(30, 30, 30)",
          }}
        >
          <ChartLine />
        </div>
        <div
          style={{
            padding: "40px",
            borderRadius: "10px",
            background: "rgb(30, 30, 30)",
          }}
        >
          <ChartLine />
        </div>
      </Grid>
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "10px",
            background: "rgb(30, 30, 30)",
          }}
        >
          <ChartBar />
        </div>
      </div>
    </div>
  );
}
