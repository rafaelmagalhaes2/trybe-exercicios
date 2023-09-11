type CardProps = {
  cityInfo: {
    city: string;
    country: string;
    imageUrl: string;
    visited?: boolean;
  };
};

function Card({ cityInfo }: CardProps) {
  const { city, country, imageUrl, visited } = cityInfo;

  return (
    <div className="card">
      <img src={ imageUrl } alt={ city } />
      <h2>{ city }</h2>
      <h2>{ country }</h2>
      {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
