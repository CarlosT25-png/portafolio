import classes from "./ProjectsStore.module.css";

const ProjectTemplate = () => {
  return (
    <section className={classes["main"]}>
      <h2>My Projects</h2>
      <div className={classes["banner-section"]}>
        <div className={classes["left-side"]}>
          <img
            src="https://img.digitimes.com/newsshow/20220503vl202_files/5_b.jpg"
            alt="sign recognition"
          />
          <div>
            <h3>Dactichat</h3>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className={classes["right-side"]}>
          <h4>Learn more</h4>
          <button>Website</button>
          <h4>Or Visit</h4>
          <button>Github Repo</button>
        </div>
      </div>
      <details open>
        <summary>Technologies</summary>
        <p>Lorem Ipsum</p>
      </details>
      <details open>
        <summary>Summary</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          faucibus, orci eget blandit convallis, massa massa posuere urna, at
          volutpat tellus sapien vel nisl. Aliquam bibendum nisl quis ultrices
          luctus. Phasellus tincidunt quam sit amet felis fermentum gravida.
          Praesent cursus nunc nunc. Pellentesque viverra vel quam ut tincidunt.
          Donec non interdum diam. Curabitur egestas ligula nunc, eu rutrum
          massa semper id. Nulla congue rutrum luctus. Nullam imperdiet eget dui
          et varius. Maecenas ut quam malesuada, ornare ipsum nec, lobortis
          sapien. Phasellus dignissim elit ut lacus varius, et semper orci
          tincidunt. Suspendisse in eros sed nulla ultricies varius ac non
          neque. Duis ullamcorper urna lobortis orci feugiat egestas. Phasellus
          tortor ex, pellentesque quis nisi sit amet, accumsan dictum augue.
        </p>
      </details>
    </section>
  );
};

const Dactichat = () => {
  return <ProjectTemplate />;
};

export { Dactichat };
