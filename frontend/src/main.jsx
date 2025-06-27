import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
// The BrowserRouter in react-router-dom is a component used to enable client-side routing in a React application.
// It allows your app to navigate between different components or pages without reloading the page —
// mimicking a multi-page experience in a Single Page Application (SPA).
// Allows use of routing components like:

//  <Routes>: for defining route paths.

//  <Route>: to map a path to a component.

//  <Link>: to navigate without reloading.

// useNavigate, useParams, useLocation: for programmatic navigation and route data.
