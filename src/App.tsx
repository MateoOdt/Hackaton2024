import { useState } from "react";
import React from "react";
import { Button, Dialog, Drawer, IconButton } from "@mui/material";
import { NFCDialog } from "./components/NFCDialog";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Dashboard } from "./page/Dashboard";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { LeftPannel } from "./components/LeftPannel";

function App() {
  const [open, setOpen] = useState(false);
  const [openLeftPannel, setOpenLeftPannel] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <>
      {open && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <NFCDialog onClose={() => setOpen(false)} />
        </Dialog>
      )}
      {openLeftPannel && (
        <Drawer
          open={openLeftPannel}
          onClose={() => setOpenLeftPannel(false)}
          sx={{
            background: "rgb(30, 30, 30)",
          }}
        >
          <LeftPannel onClose={() => setOpenLeftPannel(false)} />
        </Drawer>
      )}
      <div
        className="header"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "calc(100% - 40px)",
          height: "80px",
          background: "rgb(30, 30, 30)",
          display: "flex",
          alignItems: "center",
          padding: "0 20px 0px 20px",
        }}
      >
        <IconButton onClick={() => setOpenLeftPannel(true)}>
          <DragIndicatorIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          sx={{
            marginLeft: "auto",
          }}
        >
          Login
        </Button>
      </div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
