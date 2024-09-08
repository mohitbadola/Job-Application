import React, { useEffect, useState, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Card, Grid, InputAdornment, TextField, Typography, Grow } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  const fetchPosts = useCallback(async () => {
    let response;
    if (query.length > 2) {
      response = await axios.get(`http://localhost:8080/jobPost/keyword/${query}`);
    } else {
      response = await axios.get(`http://localhost:8080/jobPosts`);
    }
    setPost(response.data);
  }, [query]);

  useEffect(() => {
    fetchPosts();
  }, [query, fetchPosts]);

  const handleDelete = (id) => {
    async function deletePost() {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
    }
    deletePost();
    window.location.reload();
  };

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Grid item xs={12}>
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              sx={{
                width: "75%",
                padding: "2% auto",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                boxShadow: "0px 3px 6px #00000029",
                "& .MuiInputBase-input": {
                  color: "#333",
                  fontFamily: "Roboto, sans-serif",
                },
              }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>
        {post &&
          post.map((p) => (
            <Grow in={true} key={p.id} timeout={500}>
              <Grid item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    padding: "2%",
                    overflow: "hidden",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0px 3px 10px #00000029",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 5px 15px #00000050",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.75rem",
                      fontWeight: "700",
                      fontFamily: "Poppins, sans-serif",
                      color: "#333",
                    }}
                  >
                    {p.postProfile}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      marginTop: "1%",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                    }}
                    variant="body2"
                  >
                    Description: {p.postDesc}
                  </Typography>
                  <br />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1.25rem",
                      color: "#007bff",
                    }}
                  >
                    Experience: {p.reqExperience} years
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                      color: "#333",
                      marginBottom: "1rem",
                    }}
                    gutterBottom
                    variant="body2"
                  >
                    Skills:
                  </Typography>
                  {p.postTechStack.map((s, i) => (
                    <Typography
                      variant="body2"
                      sx={{
                        display: "inline-block",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        margin: "0 0.25rem 0.25rem 0",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "0.875rem",
                      }}
                      gutterBottom
                      key={i}
                    >
                      {s}
                    </Typography>
                  ))}
                  <Box sx={{ marginTop: "1rem" }}>
                    <DeleteIcon
                      onClick={() => handleDelete(p.postId)}
                      sx={{
                        color: "#f44336",
                        cursor: "pointer",
                        marginRight: "1rem",
                        "&:hover": {
                          color: "#d32f2f",
                        },
                      }}
                    />
                    <EditIcon
                      onClick={() => handleEdit(p.postId)}
                      sx={{
                        color: "#1976d2",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#115293",
                        },
                      }}
                    />
                  </Box>
                </Card>
              </Grid>
            </Grow>
          ))}
      </Grid>
    </>
  );
};

export default Search;





