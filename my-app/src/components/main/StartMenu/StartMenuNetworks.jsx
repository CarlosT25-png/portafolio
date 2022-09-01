import StartMenuIconA from './StarMenuIconA';

import githubLogo from '../../../assets/github.png';
import linkedinLogo from '../../../assets/linkedin.png';
import emailLogo from '../../../assets/email.png';
import pdfLogo from '../../../assets/pdf.png';
import cmdLogo from '../../../assets/cmd.png';
import classes from './StartMenuNetworks.module.css';

const StartMenuNetworks = (props) => {
  return (
    <div className={props.className + ' ' + classes.container}>
      <StartMenuIconA
        image={githubLogo}
        title="CarlosT25-png"
        subtitle="GitHub Profile"
        link="https://github.com/CarlosT25-png"
      />
      <StartMenuIconA
        image={linkedinLogo}
        title="Carlos Torres"
        subtitle="LiinkedIn Profile"
        link="https://www.linkedin.com/in/carlos-torres-1b8574144/"
      />
      <div className={classes.divider}></div>
      <StartMenuIconA image={emailLogo} title="Contact Me" link="#" target="" />
      <StartMenuIconA
        image={pdfLogo}
        title="Curriculum Vitae"
        link="#"
        target=""
      />
      <StartMenuIconA image={cmdLogo} title="Skills" link="#" target="" />
      <div>
        <p>All Programs</p>
        <span></span>
      </div>
    </div>
  );
};

export default StartMenuNetworks;
