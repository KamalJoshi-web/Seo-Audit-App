import { Box, Stack, Typography } from "@mui/material";
import Score from "./Score";
import React from "react";

const ChecksOnPage = ({ check }) => {
  return (
    <Box>
      <Typography variant="h5">Checks</Typography>
      <Stack
        flexDirection={"row"}
        gap={3}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        my={3}
      >
        <Score score={check.canonical} label={"Canonical"} />
        <Score
          score={check.duplicate_meta_tags}
          label={"Duplicate Meta Tags"}
        />
        <Score score={check.frame} label={"Frame"} />
        <Score score={check.is_https} label={"https"} />
        <Score score={check.is_http} label={"http"} />
        <Score score={check.no_h1_tag} label={"No h1 Tag"} />
        <Score score={check.seo_friendly_url} label={"Seo Friendly Url"} />
        <Score score={check.no_image_title} label={"No Image Title"} />
        <Score score={check.no_image_alt} label={"No Image Alt"} />
        <Score
          score={check.no_content_encoding}
          label={"no_content_encoding"}
        />
        <Score score={check.high_waiting_time} label={"High Waiting Time"} />
        <Score score={check.high_loading_time} label={"High Loading Time"} />
        <Score score={check.irrelevant_title} label={"Irrelevant Title"} />
        <Score
          score={check.https_to_http_links}
          label={"https to http Links"}
        />
        <Score
          score={check.size_greater_than_3mb}
          label={"Size Greater Than 3mb"}
        />
        <Score score={check.has_misspelling} label={"Has Misspelling"} />
      </Stack>
    </Box>
  );
};

export default ChecksOnPage;
