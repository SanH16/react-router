import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// {
//     text: string(length: 6-50, preview only)
//     image: string(url)
//     likes: number(init value: 0)
//     tags: array(string)
//     owner: string(User id)
//     }
//     Post Pre
function AddArticlePages() {
  return (
    <>
      <Stack gap={4}>
        <Input type="text" placeholder="text" />
        <Input type="number" placeholder="likes" />
        <Input type="file" placeholder="image" />

        <Link to="/">
          <Button>home</Button>
        </Link>
      </Stack>
    </>
  );
}

export default AddArticlePages;
