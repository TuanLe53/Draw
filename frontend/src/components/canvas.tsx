import { useRef } from "react";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";

export default function Canvas(){
    const canvasRef = useRef<ReactSketchCanvasRef>(null);

    return(
        <div>
            <ReactSketchCanvas
                ref={canvasRef}
                width="100%"
                height="150px"
                canvasColor="transparent"
                strokeColor="#a855f7"
            />
        </div>
    )
}