import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import BasicDetails from "./BasicDetails";
import OnPageResult from "./OnPageResult";
const apiUsernameGet = import.meta.env.VITE_DATA_FOR_SEO_API_UNSERNAME;
const apiPasswordGet = import.meta.env.VITE_DATA_FOR_SEO_API_PASSWORD;

const PageInfo = () => {
  const [urlInfo, setUrlInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  const ApiData = {
    method: "get",
    url: `https://api.dataforseo.com/v3/on_page/summary/${params.id}`,
    auth: {
      username: apiUsernameGet,
      password: apiPasswordGet,
    },
  };
  useEffect(() => {
    const fetchUrlData = async () => {
      try {
        const { data } = await axios.request(ApiData);
        if (data["tasks"][0]["result"][0]["crawl_progress"] === "in_progress") {
          setLoading(true);
          setTimeout(fetchUrlData, 4000);
        } else {
          setLoading(false);
          setUrlInfo(data["tasks"][0]["result"][0]);
        }
      } catch (error) {
        toast.error("Error", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchUrlData();
  }, [params.id]);

  if (error) {
    return (
      <Box>
        <Typography variant="h2" textAlign={"center"} color={"#FFA100"}>
          Oops! Failed to load data
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {loading ? (
        <Box>
          {" "}
          <ClockLoader
            size={80}
            color="#008080"
            cssOverride={{ margin: "auto" }}
          />
          <Typography
            variant="h5"
            textAlign={"center"}
            my={5}
            color={"darkgray"}
          >
            This may take a few minutes. <br /> Please do not close this window.
          </Typography>
        </Box>
      ) : (
        <Stack mt={3}>
          <Stack>
            <Box>
              <Typography
                textAlign="center"
                textTransform="uppercase"
                letterSpacing={1.2}
                sx={{
                  fontSize: {
                    lg: "3.5rem",
                    md: "3rem",
                    sm: "2rem",
                    xs: "1rem",
                  },
                }}
                lineHeight={1.2}
                gutterBottom
              >
                {" "}
                Audit Report <br />{" "}
                <span style={{ fontWeight: "bold", color: "#0F52BA" }}>
                  {" "}
                  {urlInfo.domain_info.name}
                </span>
              </Typography>
              {/* Basic Detail Component */}
              <BasicDetails detail={urlInfo.domain_info} />
              {/* OnPage Details */}
              <OnPageResult result={urlInfo.page_metrics} />
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default PageInfo;
