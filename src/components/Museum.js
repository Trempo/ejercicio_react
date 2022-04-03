import './Museum.css';
const Museum = (prop) => {
  return (
    <div className="col-12 col-md-3 mb-3 d-flex  justify-content-center">
      <div className="card menuItems text-center" onClick={() => prop.onRedirect(prop.museum)}>
        <img src={prop.museum.image} className="card-img-top optionPhoto mx-auto mb-1" alt="" />
        <div className="card-body d-flex align-items-center flex-column">
          <h5 className="card-title">{prop.museum.name}</h5>
          <div>
            <p className="card-text description text-left">{prop.museum.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Museum;
