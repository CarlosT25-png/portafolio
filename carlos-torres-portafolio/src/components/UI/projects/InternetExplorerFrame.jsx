import { useRef, useState, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";

import { foldersActions } from "../../../store/index";

import classes from "./InternetExplorerFrame.module.css";
import logo from "../../../assets/ie_logo.webp";

const InternetExplorerFrame = (props) => {
  const dispatch = useDispatch();
  const mainFrame = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [posFullScreen, setPosFullScreen] = useState(null);

  useLayoutEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    setWidth(x - mainFrame.current.offsetWidth / 2);
    setHeight(y - mainFrame.current.offsetHeight / 2);
  }, []);

  const closeHandler = () => {
    dispatch(foldersActions.delete(props.name));
  };

  const onFullScreenHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setFullScreen((prev) => !prev);
    setPosFullScreen((val) => {
      if (!val) {
        return {
          x: 0,
          y: 0,
        };
      } else {
        return null;
      }
    });
  };

  return (
    <Draggable
      disabled={fullScreen}
      position={posFullScreen}
      defaultPosition={{ x: width, y: height }}
      handle="#handle"
    >
      <div
        ref={mainFrame}
        className={`${classes["main-frame"]} ${
          fullScreen ? classes["fullscreen"] : ""
        } `}
      >
        <div className={classes.head}>
          <div id="handle">
            <img src={logo} alt="Internet Explorer Logo" />
            <h3>{props.name}</h3>
          </div>
          <div>
            <span>&minus;</span>
            <span onClick={onFullScreenHandler}>&#9634;</span>
            <span onClick={closeHandler}>&#9747;</span>
          </div>
        </div>
        <div className={classes.content}>{props.children}</div>
      </div>
    </Draggable>
  );
};

export default InternetExplorerFrame;
