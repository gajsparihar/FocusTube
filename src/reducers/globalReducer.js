export const globalState = {
  feedVideos: [],
  searchVideos: [],
  channelDetail: {},
  channelVideos: [],
  videoDetail: {},
  selectedChannel: "",
};

export const UPDATE_SEARCH_VIDEOS = "UPDATE_SEARCH_VIDEOS";
export const UPDATE_FEED_VIDEOS = "UPDATE_FEED_VIDEOS";
export const SET_VIDEO_DETAIL = "SET_VIDEO_DETAIL";
export const SET_CHANNEL_DETAIL = "SET_CHANNEL_DETAIL";
export const UPDATE_CHANNEL_VIDEOS = "UPDATE_CHANNEL_VIDEOS";
export const SET_SELECTED_CHANNEL = "SET_SELECTED_CHANNEL";

export const reducerFn = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FEED_VIDEOS:
      return {
        ...state,
        feedVideos: state.feedVideos.concat(payload),
      };
    case UPDATE_SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: state.searchVideos.concat(payload),
      };

    case SET_VIDEO_DETAIL:
      return {
        ...state,
        videoDetail: payload,
      };
    case SET_CHANNEL_DETAIL:
      return {
        ...state,
        channelDetail: payload.channel || {},
        channelVideos: payload.videos || [],
      };
    case UPDATE_CHANNEL_VIDEOS:
      return {
        ...state,
        channelVideos: state.channelVideos.concat(payload),
      };
    case SET_SELECTED_CHANNEL:
      return {
        ...state,
        feedVideos: [],
        selectedChannel: payload,
      };
    default:
      return state;
  }
};
