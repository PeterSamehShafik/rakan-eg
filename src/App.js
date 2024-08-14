import React, { useEffect, useState } from "react";

import "./App.css";
import SplashScreen from "./Common/ui/SplashScreen.jsx";
import AppRouter from "./Routes/AppRouter.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ?
        <SplashScreen />
        :
        <div className="App">
          <AppRouter />
        </div>
      }
    </>
  );
}

export default App;
