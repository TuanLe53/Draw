import { Eraser, Paintbrush, Pencil } from "lucide-react";
import { useRef, useState, type ChangeEvent } from "react";
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";

export default function Canvas(){
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [ eraserWidth, setEraserWidth] = useState(5);
    const [strokeColor, setStrokeColor] = useState("#106358");

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

    const handleStrokeColorChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStrokeColor(event.target.value);
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

            <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-fd-muted-foreground">
                    <Paintbrush className="w-3.5 h-3.5" />
                    Stroke Color
                </span>
                <label className="relative flex items-center gap-2 px-3 py-1.5 rounded-md border border-fd-border bg-fd-muted hover:bg-fd-accent/50 cursor-pointer transition-colors duration-200 text-xs font-medium">
                    <span
                        className="w-4 h-4 rounded-full border border-fd-border shadow-inner"
                        style={{ backgroundColor: strokeColor }}
                    />
                    <span className="font-mono text-[11px]">
                        {strokeColor.toUpperCase()}
                    </span>
                    <input
                        type="color"
                        value={strokeColor}
                        onChange={handleStrokeColorChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </label>
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
                strokeColor={strokeColor}
                width="100%"
                height="150px"
                canvasColor="transparent"
            />
        </div>
    )
}