import React, { useEffect, useState } from "react"
import { Routes, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"
TopBarProgress.config({
    barColors: {
        "0": "#F44336",
        "1.0": "#F44336"
    },
    barThickness: 3,
    shadowBlur: 5
});
const TopLoader = ({ children }) => {
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()
    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if (location.pathname === prevLoc) {
            setPrevLoc('')
        }
        //eslint-disable-next-line
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])

    return (
        <>
            {progress && <TopBarProgress />}
            <Routes>{children}</Routes>
        </>
    )
}

export default TopLoader