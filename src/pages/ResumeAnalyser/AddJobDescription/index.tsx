import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import selected_img from "../../../assets/img/selected_img.png";

interface Props {
  handleChange: Function;
  fileData: any;
  handleResumeReject: Function;
}

const AddJobDescription: React.FC<Props> = ({ handleChange, fileData, handleResumeReject }) => {
  const textAreaRef = React.useRef(null);
  const handleSubmit = () => {
    handleChange(textAreaRef.current.value);
  };
  function handleClearResume (){
    handleResumeReject()
  }
  const tempFile = {
    lastModified: 1688222201849,
    lastModifiedDate: "Sat Jul 01 2023 20:06:41 GMT+0530 (India Standard Time)",
    name: "Jake_s_Resume__Anonymous_.pdf",
    size: 125463,
    type: "application/pdf",
    webkitRelativePath: "",
  };

  return (
    <div className="upload_container">
      <h3 className="steps-title">Job description</h3>

      <div className="selected_file_wrapper">
        <div className="selected_file">
          <img src={selected_img} alt="selected_img" />
          <p>{tempFile?.name}</p>
          <button onClick={handleClearResume}>
            <AiFillCloseCircle fill="#F44336" />
          </button>
        </div>
      </div>

      <div className="step-activity">
        <div className="">
          <textarea
            className="textArea"
            name=""
            id=""
            cols="30"
            rows="10"
            ref={textAreaRef}
          ></textarea>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Get Score
        </button>
      </div>
    </div>
  );
};

export default AddJobDescription;
