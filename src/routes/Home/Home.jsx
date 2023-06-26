import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style["homepage"]}>
      <section className={style["homepage-intro"]}>
        <p>
          Hello, My Name is <br />
          <span>Jaya Surbiryala</span> <br />A Front end webdeveloper who likes
          create things with passion
        </p>
      </section>
    </div>
  );
}
