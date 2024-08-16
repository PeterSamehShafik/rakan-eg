import React, { useEffect, useState } from "react";

import SplashScreen from "./Components/SplashScreen.jsx";
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
        <div className="App selection:bg-red-300">
          <AppRouter />
        </div>
      }
    </>
  );
}

export default App;
