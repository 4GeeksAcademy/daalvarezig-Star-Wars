export default function Card({ item, imgUrl, isFavorite, onFavoriteToggle }) {

    return (
        <div 
            className="card bg-dark text-white shadow-lg"
            style={{ width: "16rem", minWidth: "16rem", borderRadius: "10px" }}
        >

            <img
                src={imgUrl}
                className="card-img-top"
                alt={item.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png";
                }}
                style={{ 
                    borderTopLeftRadius: "10px", 
                    borderTopRightRadius: "10px",
                    height: "180px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body">

                {/* FAVORITOS */}
                <div className="d-flex justify-content-between align-items-center">

                    <h5 className="card-title mb-0 text-truncate" 
                        style={{ maxWidth: "11rem" }}
                    >
                        {item.name}
                    </h5>

                    <i
                        className={`fa-star ${isFavorite ? "fa-solid text-warning" : "fa-regular"}`}
                        style={{ cursor: "pointer", fontSize: "1.3rem" }}
                        onClick={onFavoriteToggle}
                    ></i>

                </div>

                {/* DETALLES */}
                <button className="btn btn-primary mt-3 w-100 text-nowrap">
                    Detalles
                </button>

            </div>
        </div>
    );
}