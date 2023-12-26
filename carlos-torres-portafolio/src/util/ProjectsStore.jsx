import classes from './ProjectsStore.module.css'

const ProjectTemplate = () => {
  return <section className={classes['main']} >
    <h2>My Projects</h2>
    <div className={classes['banner-section']}>
      <div className={classes['left-side']}>
        <img src='https://img.digitimes.com/newsshow/20220503vl202_files/5_b.jpg' alt='sign recognition' />
        <div>
          <h3>Dactichat</h3>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div>
        <h4>Learn more</h4>
        <button>Website</button>
        <h4>Or Visit</h4>
        <button>Github Repo</button>
      </div>
    </div>
    <summary>
      <details>
        Lorem Ipsum
      </details>
    </summary>
  </section>
}


const Dactichat = () => {
  return <ProjectTemplate />
}

export {Dactichat}