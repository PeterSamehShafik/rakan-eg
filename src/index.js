import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorText from "./Components/ErrorText";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  // return (
  //   <div role="alert">
  //     <p>Something went wrong:</p>
  //     <pre style={{ color: "red" }}>{error.message}</pre>
  //     <button className='btn' onClick={resetErrorBoundary}> Try again </button>
  //   </div>
  // );
  //return <> <NotFound error={error} resetErrorBoundary={resetErrorBoundary} /> </>
  return (
    <ErrorText text="Something went wrong.. Please contact the support team." />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender} onReset={(details) => {}}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
