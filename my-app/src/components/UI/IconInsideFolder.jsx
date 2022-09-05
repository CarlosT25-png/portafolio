import classes from './IconInsideFolder.module.css';

const IconInsideFolder = props => {

  const onButtonClick = () => {
    fetch(`/src/assets/files/${props.file}`).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = `../../assets/files/${props.file}`;
            alink.click();
        })
    })
}

  return (
    <div onClick={onButtonClick} className={classes['main-frame']}>
      <img src={`/src/assets/${props.image}`}/>
      <div className={classes.info} >
        <h4>{props.title}</h4>
        <h6>{props.filetype}</h6>
        <p>{props.size}</p>
      </div>
    </div>
  )
};

export default IconInsideFolder;