export const Instructor = ({ name, email }) => {
  return (
    <section className="instructor">
      <h2>Instruktor</h2>
      <p>{name}</p>
      <p>{email}</p>
    </section>
  );
};