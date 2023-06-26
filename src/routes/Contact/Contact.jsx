import style from "./Contact.module.css";
export function Contact() {
  return (
    <div className={style["contact-page"]}>
      <div className={style["contact-form"]}>
        <form action="submit" className={style["form"]}>
          <label htmlFor="">Yourname</label>
          <br />
          <input type="text" name="" id="" placeholder="Enter your name" />
          <br />

          <label htmlFor="">EmailId</label>
          <br />
          <input type="email" name="" id="" placeholder="Enter your email-id" />
          <br />

          <label htmlFor="">Your Message</label>
          <br />

          <textarea name="" id="" cols="25" rows="10">
            Your message
          </textarea>
          <br />

          <button type="submit">Contact me</button>
        </form>
      </div>
      <div className={style["contact-info"]}>
        <h1>Contact Me</h1>
        <p>Let's have a quickchat about your thoughts</p>
        <p>
          Feel free to contact me, i would like to discuss anything whatever is
          running in your mind. hope i can help you, so don't hesitate to
          contact me
        </p>
      </div>
    </div>
  );
}
