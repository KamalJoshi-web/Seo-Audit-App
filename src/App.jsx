import React from "react";
import { Routes, Route } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Home from "./components/Home";
import PageInfo from "./components/PageInfo";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Stack
        minHeight={"80vh"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageinfo/:id" element={<PageInfo />} />
        </Routes>
        <Toaster />
      </Stack>
    </>
  );
};

export default App;
