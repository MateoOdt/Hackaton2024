import { useState } from "react";
import React from "react";
import { Button, Dialog } from "@mui/material";
import { NFCDialog } from "./components/NFCDialog";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Dashboard } from "./page/Dashboard";

function App() {
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

  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <NFCDialog onClose={() => setOpen(false)} />
        </Dialog>
      )}
      <div
        className="header"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          background: "rgb(30, 30, 30)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          sx={{
            marginLeft: "auto",
            marginRight: "30px",
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
