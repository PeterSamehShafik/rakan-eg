import React from 'react'
import useChangeTitle from "../Hooks/useChangeTitle.jsx";
export default function NotFound() {
  useChangeTitle("404 Page not found");
  return (
    <div>NotFound</div>
  )
}
