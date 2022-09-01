import classes from './StartMenuIconA.module.css';

const StartMenuIconA = (props) => {
  let target = props.target ? props.target : '_blank';
  let subtitle = props.subtitle ? props.subtitle : '';

  return (
    <a href={props.link} target={target} className={classes.link}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3 className={subtitle !== '' ? classes.bold : ''} >{props.title}</h3>
        {subtitle && subtitle !== '' && <h4>{subtitle}</h4>}
      </div>
    </a>
  );
};

export default StartMenuIconA;
