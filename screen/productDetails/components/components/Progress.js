import React from "react"
const labels = ["T", "E", "L", "E", "P", "R", "I", "N", "T"]

const TeleLoader = ({ percent }) => {
  // Calculate the index in the label array based on the percentage
  const labelIndex = Math.min(Math.floor((percent / 100) * labels.length), labels.length - 1)
  const labelCount = labels[labelIndex]

  return (
    <div className="progress-container">
      <progress className="progress-bar" value={percent / 100} max="1"></progress>
      <div className="progress-thumb" style={{ left: `${percent}%` }}>
        {labelCount}
      </div>
    </div>
  )
}

export { TeleLoader }
