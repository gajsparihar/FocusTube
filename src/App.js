import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { AppContext } from "./contexts/AppContext";
import { globalState, reducerFn } from "./reducers/globalReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, globalState);
  const store = { state, dispatch };

  return (
    <BrowserRouter>
      <AppContext.Provider value={store}>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
