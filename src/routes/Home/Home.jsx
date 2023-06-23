import style from "./Home.module.css";
export function Home() {
  return (
    <div className={style["homepage"]}>
      <section className={style["homepage-intro"]}>
        <p>
          Hello, My Name is
          <span>Jaya Surbiryala</span> <br />A Front end webdeveloper who likes
          create things with passion
        </p>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          mollitia veniam voluptatum alias incidunt fuga numquam! Voluptas nisi
          molestiae iure ipsum. Accusamus molestias aliquid rerum cumque et
          perferendis iusto neque.
        </p>
      </section>
    </div>
  );
}
