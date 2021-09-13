import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Max"
          width={400}
          height={400}
        />
      </div>
      <h1> Hi, I&aposm Lukas</h1>
      <p>Blog about nothing - especially nothing and nothing</p>
    </section>
  );
}
