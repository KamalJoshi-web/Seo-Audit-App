import React, { useState } from "react";
import { Box, Typography, TextField, Container, Button } from "@mui/material";
import { SendSharp } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const apiUsername = import.meta.env.VITE_DATA_FOR_SEO_API_UNSERNAME;
const apiPassword = import.meta.env.VITE_DATA_FOR_SEO_API_PASSWORD;
const Home = () => {
  const navigate = useNavigate();
  const regexCode =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submittedUrl = async (data) => {
    try {
      const response = await sendApiRequest(data.url);
      const id = response?.data?.tasks[0]?.id;

      if (id) {
        navigate(`/pageinfo/${id}`);
      } else {
        toast.error("Invalid response from the API.");
      }
    } catch (error) {
      toast.error("API request failed:", error);
    }
  };

  const sendApiRequest = async (url) => {
    const ApiSendUrl = {
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/task_post",
      auth: {
        username: apiUsername,
        password: apiPassword,
      },
      data: [
        {
          target: url,
          max_crawl_pages: 10,
          load_resources: true,
          enable_javascript: true,
        },
      ],
      headers: {
        "content-type": "application/json",
      },
    };

    return axios.request(ApiSendUrl);
  };

  return (
    <Container maxWidth={"lg"}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        // color={"#3498db"}
        my={2}
        textAlign={"center"}
        letterSpacing={1.2}
        sx={{
          background: "linear-gradient(45deg, #ff9900, #ff6600)",
          color: "transparent",
          backgroundClip: "text",
        }}
      >
        Unlock Your Website's Potential with Precision SEO Audits!
      </Typography>
      <Box component={"form"} onSubmit={handleSubmit(submittedUrl)}>
        <TextField
          label="Please enter URL here.."
          variant="filled"
          fullWidth
          color="secondary"
          sx={{ my: 2 }}
          {...register("url", {
            required: "Domain is required",
            pattern: {
              value: regexCode,
              message: "Please Enter valid Domain",
            },
          })}
          error={!!errors?.url}
          helperText={errors?.url ? errors.url.message : null}
        />
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendSharp />}
          fullWidth
          sx={{
            transition: "0.3s ease-in-out",
            backgroundColor: "#008080",
            ":hover": { opacity: "0.33" },
          }}
        >
          Try Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
