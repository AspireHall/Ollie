import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { coinLayerApi } from "./coinLayerApi";
import { polygonApi } from "./polygonApi";
import { cryptoNewsApi } from "./cryptoNewsApi";
import { moralisApisol } from "./moralisApisol";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [coinLayerApi.reducerPath]: coinLayerApi.reducer,
    [polygonApi.reducerPath]: polygonApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [moralisApisol.reducerPath]: moralisApisol.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coinLayerApi.middleware,
      polygonApi.middleware,
      cryptoNewsApi.middleware,
      moralisApisol.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
