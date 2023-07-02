import React from 'react'

interface Props {
  handleRejectJD: Function;
  // fileData: any;
  // handleResumeReject: Function;
}

const Result:React.FC<Props> = ({handleRejectJD}) => {
  return (
    <div className="results">
      <div className="analyser-top margin-auto">
            <span>
              Here's Your Resume Score
            </span>
          </div>
    </div>
  )
}

export default Result