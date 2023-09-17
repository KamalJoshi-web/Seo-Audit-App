import { Box, Typography } from "@mui/material";
import React from "react";

const BasicDetails = ({ detail }) => {
  const styleVar = {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1.2",
    margin: "0 10px",
    sx: {
      fontSize: {
        lg: "1.2rem",
        md: "1rem",
        sm: "1rem",
        xs: ".6rem",
      },
    },
  };
  return (
    <Box>
      <Typography {...{ ...styleVar }}>
        Ip Address:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {detail.ip === null ? "N/A" : detail.ip}
        </span>
      </Typography>
      <Typography {...{ ...styleVar }}>
        Server:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {" "}
          {detail.server === null ? "N/A" : detail.server}
        </span>
      </Typography>
      <Typography {...{ ...styleVar }}>
        Ssl certificate subject:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {detail.ssl_info === null
            ? "N/A"
            : detail.ssl_info.certificate_subject}
        </span>
      </Typography>
      <Typography {...{ ...styleVar }}>
        Ssl certificate version:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {detail.ssl_info === null
            ? "N/A"
            : detail.ssl_info.certificate_version}
        </span>
      </Typography>
      <Typography {...{ ...styleVar }}>
        Ssl certificate hash:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {detail.ssl_info === null ? "N/A" : detail.ssl_info.certificate_hash}
        </span>
      </Typography>
      <Typography {...{ ...styleVar }}>
        Ssl certificate expiration date:{" "}
        <span style={{ color: "#008080", fontWeight: "bolder" }}>
          {detail.ssl_info === null
            ? "N/A"
            : detail.ssl_info.certificate_expiration_date}
        </span>
      </Typography>
    </Box>
  );
};

export default BasicDetails;
