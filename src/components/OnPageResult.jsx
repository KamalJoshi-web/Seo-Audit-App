import {
  Badge,
  Box,
  Chip,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Score from "./Score";
import ChecksOnPage from "./ChecksOnPage";

const OnPageResult = ({ result }) => {
  return (
    <Box mt={5} mx={"auto"} width={"70%"}>
      <Typography variant="h5">
        {" "}
        OnPage Result{" "}
        <span style={{ color: "#008080", fontSize: "14px" }}>
          {result.onpage_score}%
        </span>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={result.onpage_score}
        sx={{ py: 1, my: 1 }}
      />
      {/* */}
      <Stack
        my={5}
        flexDirection={"row"}
        gap={3}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <Score score={result.links_external} label={"External Links"} />
        <Score score={result.links_internal} label={"Internal Links"} />
        <Score score={result.duplicate_title} label={"Duplicate Title"} />
        <Score
          score={result.duplicate_description}
          label={"Duplicate Description"}
        />
        <Score score={result.duplicate_content} label={"Duplicate Content"} />
        <Score score={result.broken_links} label={"Broken Links"} />
        <Score score={result.broken_resources} label={"Broken Resources"} />
        <Score
          score={result.links_relation_conflict}
          label={"Links Relation Conflict"}
        />
        <Score score={result.redirect_loop} label={"Redirect Loop"} />
        <Score score={result.non_indexable} label={"Non Indexable"} />
      </Stack>
      <ChecksOnPage check={result.checks} />
    </Box>
  );
};

export default OnPageResult;
