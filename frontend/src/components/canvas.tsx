import { Eraser, Pencil } from "lucide-react";
import { useRef, useState } from "react";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";

export default function Canvas(){
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [eraseMode, setEraseMode] = useState(false);

    const handleEraserClick = () =>{
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
    }

    const handlePenClick = () =>{
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
    }

    return(
        <div>
            <div>
                <button
                    type="button"
                    onClick={handlePenClick}
                >
                    <Pencil />
                    Pen
                </button>
                <button
                    type="button"
                    onClick={handleEraserClick}
                >
                    <Eraser />
                    Eraser
                </button>
            </div>
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