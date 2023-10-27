import "./ImageLinkForm.css";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 " type="text" />
          <button
            className="w-30 grow f4 link white ph3 pv2 dib"
            style={{ background: "#111941" }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;