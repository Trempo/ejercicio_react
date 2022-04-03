import './Museum.css';
const Obra = (prop) => {
  return (
    <div className="row">
      <div className="col-12 col-md-3 mb-3 d-flex  justify-content-center">
        <div className="card menuItems text-center h-100">
          <img
            src="https://cdn.pariscityvision.com/library/image/5449.jpg"
            className="card-img-top mx-auto mb-1"
            alt=""
          />
          <div className="card-body d-flex align-items-center flex-column">
            <h5 className="card-title">{prop.obra.name}</h5>
            <div></div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9  mb-3 ">
        <div className="card w-100 h-100">
          <h5 className="description">{prop.obra.description}</h5>
        </div>
      </div>
    </div>
  );
};
export default Obra;
