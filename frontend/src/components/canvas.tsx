import { Eraser, Pencil } from "lucide-react";
import { useRef, useState, type ChangeEvent } from "react";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";

export default function Canvas(){
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [ eraserWidth, setEraserWidth] = useState(5);

    const handleEraserClick = () =>{
        setEraseMode(true);
        canvasRef.current?.eraseMode(true);
    }

    const handlePenClick = () =>{
        setEraseMode(false);
        canvasRef.current?.eraseMode(false);
    }

    const handleStrokeWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStrokeWidth(+event.target.value);
	};

    const handleEraserWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEraserWidth(+event.target.value);
	};

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

            <div>
                <div>
                    <span>Stroke width</span>
                    <span>{strokeWidth}px</span>
                </div>
                <input 
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    id="strokeWidth"
                    value={strokeWidth}
                    onChange={handleStrokeWidthChange}
                />
            </div>

            <div>
                <div>
                    <span>Eraser width</span>
                    <span>{eraserWidth}px</span>
                </div>
                <input 
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    id="eraserWidth"
                    value={eraserWidth}
                    onChange={handleEraserWidthChange}
                />
            </div>

            <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={strokeWidth}
                eraserWidth={eraserWidth}
                width="100%"
                height="150px"
                canvasColor="transparent"
                strokeColor="#a855f7"
            />
        </div>
    )
}