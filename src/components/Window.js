import React from "react";
import Draggable from "react-draggable";
import resume from "../assets/resume.png";

function Window({ title, content, wordsPerLine }) {
    // states
    const [windowStyle, setWindowStyle] = React.useState("window");
    const [open, setOpen] = React.useState(true);

    let jsx = [];
    for (
        let index = 0; index < Math.round(content.length / wordsPerLine) + 1; index++
    ) {
        jsx.push(index + 1);
    }
    if (!open) {
        return ( <
            div onClick = {
                () => setOpen(true) }
            className = "window-open-button" >
            <
            img src = { resume }
            alt = "Window Icon" / >
            <
            div > { title } < /div>{" "} <
            /div>
        );
    } else {
        return (
            // <Draggable grid={[25, 25]}>
            <
            div className = { open ? `${windowStyle}` : `${windowStyle} close` } >
            <
            div className = "header handle" >
            <
            div className = "header-left" >
            <
            img src = { resume }
            /> <div className="window-name"> {title} </div > { " " } <
            /div>{" "} <
            div className = "window-header-button" >
            <
            button className = "mini" > < /button>{" "} <
            button className = "resize" > < /button>{" "} <
            button className = "close"
            onClick = {
                () => setOpen(false) } > { " " } <
            /button>{" "} <
            /div>{" "} <
            /div>{" "} <
            div className = "content-window" >
            <
            div className = "content-window-number" > { " " } { /* {Math.round(content.length/47)} */ } { " " } {
                jsx.map((index) => ( <
                    div > { index } < /div>
                ))
            } { " " } <
            /div>{" "} <
            div className = "content-window-line" > < /div> {content}{" "} <
            /div>{" "} <
            div className = "empty-space" > < /div>{" "} <
            /div>
        );
    }
}

export default Window;

//  {/* break points for window 260px =  28words / 400px = 48 words / 650px = 82*/}
//           {/* <Window title="Window" content="windows is a goodest but the besetest operationg os in your opionon.hpefully  good not the goodest but the besetest operationg os in your opionon.hpefully yeh.windows is a good not the goodest but the besetest operationg os in your opionon.hpefully yeh.windows is a good not the goodest but the besetest operationg os in your opionon.hpefully yeh.windows is a good not the goodest but the besetest operationg os in your opionon.hpefully yeh.windows is a good not the goodest but the besetest operationg os in your opionon.hpefully yeh.windows is a good not the goodest but the besetest operationg os in your opionon.hpefully yeh.goodest but the besetest operationg os in your opionon.hpefully yeh.goodest but the besetest operationg os in your opionon.hpefully yeh.goodest but the besetest operationg os in your opionon.hpefully"
//                            wordsPerLine={48}/> */}
// .window {
//   width: 260px;
//   height: 246px;
//   transition: height 1s cubic-bezier(0, 1.22, 1, 1);
// }
// .window.close-window,
// .window.sm.close-window {
//     /* opacity:0; */
//     width: 10px;
//     /* height:0px;  */
//     transition: width .1s cubic-bezier(0, 1.22, 1, 1);
//     /* overflow:hidden; */
//     /* animation-name: clos;se-window; */
//     /* animation-duration: 4 */
// }