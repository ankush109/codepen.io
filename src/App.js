//import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import useLocalStragehook from "./hooks/useLocalStragehook";
function App() {
  const [html, sethtml] = useLocalStragehook("html",'');
  const [css, setcss] = useLocalStragehook("css",'');
  const [js, setjs] = useLocalStragehook("js",'');
  const [srcdoc,setsrcdoc]=useState("");
  useEffect(()=>{
    const time=setTimeout(() => {
      setsrcdoc(
        `
        <html>
        <body>${html}</body>
        <style>${css}</style>
         <script>${js}</script>
        </html>
        `
      )
    }, 250);
    return ()=>clearTimeout(time);
  },[html,css,js])
  return (
    
      <>
            <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={sethtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setcss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setjs}
        />
      </div>
      <div className="pane">
        <iframe
         
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          srcDoc={srcdoc}
        />
      </div>
  
      </>

  );
}

export default App;
