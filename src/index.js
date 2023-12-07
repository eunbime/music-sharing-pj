import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
// import { Provider } from 'react-redux';
// import store from 'redux/config/configStore';

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
    retry: 3
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <App />
  </QueryClientProvider>
  // </Provider>
);
