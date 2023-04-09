import "../css/shimmerMenu.css";

export const MenuShimmer = () => {
  return (
    <>
      <div className="shimme">
        <div className="first-divgi">
          <div id="box1" className="shine"></div>
          <div className="lineSeries">
            <div id="line1" className="shine"></div>
            <div id="line2" className="shine"></div>
            <div id="line3" className="shine"></div>
            <div id="line3" className="shine"></div>
          </div>
        </div>
        <br />

        <div className="first-divgi2">
          <div className="shine" id="photo10"></div>
          <div className="shine" id="photo20"></div>
          <div className="shine" id="photo20"></div>
          <div className="shine" id="photo20"></div>
          <div className="shine" id="photo20"></div>
          <div className="shine" id="photo20"></div>
        </div>
      </div>
    </>
  );
};
