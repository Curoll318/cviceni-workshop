export const Venue = ({ name, city, address }) => {
  return (
    <section className="venue">
      <h2>Místo konání</h2>
      <p>{name}</p>
      <p>{address}, {city}</p>
    </section>
  );
};