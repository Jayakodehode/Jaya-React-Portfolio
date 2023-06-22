import { Outlet, Link } from "react-router-dom";
import style from "./Landingpage.module.css";
export function Landingpage() {
  return (
    <div className={style["landingpage"]}>
      <header className={style["navbar"]}>
        <div className={style["logo"]}>JS</div>
        <div>
          <ul className={style["navitems"]}>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>

      <main className={style["main"]}>
        <Outlet />
      </main>

      <footer>
        <h1>Jaya Surbiryala</h1>
      </footer>
    </div>
  );
}
