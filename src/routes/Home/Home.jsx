import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style["homepage"]}>
      <section className={style["homepage-intro"]}>
        <h3>Hello, My Name is </h3>
        <h1>Jaya Surbiryala</h1>
        <h3>A Front end webdeveloper who likes create things with passion</h3>
      </section>
    </div>
  );
}
