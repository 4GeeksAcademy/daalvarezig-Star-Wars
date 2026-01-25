import Card from "./Card";

export default function Carrusel({ title, data, imgBaseUrl, favorites, toggleFavorite, category }) {

    return (
        <div className="mt-4">

            {/* Título */}
            <h2 className="text-white">{title}</h2>

            {/* Contenedor horizontal */}
            <div
                className="d-flex flex-nowrap overflow-auto p-3"
                style={{ gap: "1rem" }}
            >
                {data.map(item => {

                    const isFav = favorites.some(
                        f => f.uid === item.uid && f.category === category
                    );

                    return (
                        <Card
                            key={item.uid}
                            item={item}
                            category={category}
                            imgUrl={`${imgBaseUrl}/${item.uid}.jpg`}
                            isFavorite={isFav}
                            onFavoriteToggle={() =>
                                toggleFavorite({ uid: item.uid, category: category, name: item.name })
                            }
                        />
                    );
})}
            </div>
        </div>
    );
}
