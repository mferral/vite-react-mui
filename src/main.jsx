import { createRoot } from "react-dom/client";
import Routes from '@/router'
import { store } from './store'
import { Provider } from 'react-redux'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
)
