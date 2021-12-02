import "./list-hotel.css";

const ListHotel = () => {
  return (
    <div classNameName="card-list">
      <div className="container">
        <h2 className="fw-bolder" style={{ color: "#252839" }}>
          List Homestay{" "}
        </h2>
        <hr />
        <iv className="content ">
          {/* /* --------------------------------- card-1 --------------------------------- */}
          <div className="card-1">
            <div className="wrap">
              <div className="card">
                <div className="rating">4</div>
                <div className="image" style={{ backgroundImage: `url("https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg")` }}></div>
                <div className="description">
                  <div className="row d-flex">
                    <div className="col-sm">
                      <h5>Hotel mandala berapi dan sekitarnya </h5>
                    </div>
                    <div className="col-alamat">
                      <p>Jln.Bantul, Bantul, Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /* --------------------------------- card-2 ---------------------------------  */}
          <div className="card-1">
            <div className="wrap">
              <div className="card">
                <div className="rating">4</div>
                <div className="image" style={{ backgroundImage: `url("https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg")` }}></div>
                <div className="description">
                  <div className="row d-flex">
                    <div className="col-sm">
                      <h5>Hotel mandala berapi dan sekitarnya </h5>
                    </div>
                    <div className="col-alamat">
                      <p>Jln.Bantul, Bantul, Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /* --------------------------------- card-3 --------------------------------- */}
          <div className="card-1">
            <div className="wrap">
              <div className="card">
                <div className="rating">4</div>
                <div className="image" style={{ backgroundImage: `url("https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg")` }}></div>
                <div className="description">
                  <div className="row d-flex">
                    <div className="col-sm">
                      <h5>Hotel mandala berapi dan sekitarnya </h5>
                    </div>
                    <div className="col-alamat">
                      <p>Jln.Bantul, Bantul, Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /* --------------------------------- end-card-3 --------------------------------- */}
        </iv>
      </div>
    </div>
  );
};

export default ListHotel;
