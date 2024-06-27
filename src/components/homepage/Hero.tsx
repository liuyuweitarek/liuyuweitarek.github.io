import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi, I'm <span className={styles.highlighted}>Tarek Liu</span>,
          <br />
          a <span className={styles.highlighted}>Psychoinformatics Engineer</span>.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Researcher interested in personal growth and tech trends.
          <br /> Tracking authentic behavior, mapping minds, bridging Lab findings to real-world impact.
        </p>
      </div>
    </header>
  );
};
