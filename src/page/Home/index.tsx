import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const [code, setCode] = useState(null);

  const generateCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/generate-code");
      setCode(response.data.code);
    } catch (error) {
      console.error("Error generating code:", error);
    }
  };

  useEffect(() => {
    generateCode();
  }, []);

  return (
    <>
      {code && (
        <Typography fontSize="23px" fontWeight="500">
          code : {code}
        </Typography>
      )}
    </>
  );
}
