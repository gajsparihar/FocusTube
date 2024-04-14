export const globalState = {
  myChannels: {},
  channelSelectionDone: false,
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
export const UPDATE_MY_CHANNELS = "UPDATE_MY_CHANNELS";
export const SET_SEARCH_CHANNELS = "SET_SEARCH_CHANNELS";
export const REMOVE_MY_CHANNELS = "REMOVE_MY_CHANNELS";
export const SET_MY_CHANNELS = "SET_MY_CHANNELS";
export const TOGGLE_CHANNEL_SELECTION = "TOGGLE_CHANNEL_SELECTION";

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
    case UPDATE_MY_CHANNELS:
      const myChannels = state.myChannels;
      if (payload?.id?.channelId) myChannels[payload.id.channelId] = payload;
      return {
        ...state,
        myChannels,
      };
    case REMOVE_MY_CHANNELS:
      const selectedChannels = { ...state.myChannels };

      delete selectedChannels[payload];

      return {
        ...state,
        myChannels: selectedChannels,
      };
    case TOGGLE_CHANNEL_SELECTION:
      return {
        ...state,
        channelSelectionDone: !state.channelSelectionDone,
      };
    case SET_MY_CHANNELS:
      return {
        ...state,
        myChannels: payload,
        selectedChannel: Object.keys(payload)[0]
      };
    default:
      return state;
  }
};
