import { Eraser, Paintbrush, Pencil, Redo2, Trash2, Undo2 } from "lucide-react";
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

	const handleUndoClick = () => {
		canvasRef.current?.undo();
	};
	const handleRedoClick = () => {
		canvasRef.current?.redo();
	};

	const handleClearClick = () => {
		canvasRef.current?.clearCanvas();
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

            <div>
                <button
                    type="button"
                    onClick={handleUndoClick}
                    title="Undo (Ctrl+Z)"
                    className="inline-flex items-center justify-center p-2 rounded-md border border-fd-border bg-fd-card text-fd-foreground hover:bg-fd-accent transition-colors duration-150 shadow-sm"
                >
                    <Undo2 className="w-4 h-4" />
                    <span className="sr-only">Undo</span>
                </button>
                <button
                    type="button"
                    onClick={handleRedoClick}
                    title="Redo (Ctrl+Y)"
                    className="inline-flex items-center justify-center p-2 rounded-md border border-fd-border bg-fd-card text-fd-foreground hover:bg-fd-accent transition-colors duration-150 shadow-sm"
                >
                    <Redo2 className="w-4 h-4" />
                    <span className="sr-only">Redo</span>
                </button>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleClearClick}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-fd-border bg-fd-card text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-150 shadow-sm"
                >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear
                </button>
            </div>

            <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={strokeWidth}
                eraserWidth={eraserWidth}
                strokeColor={strokeColor}
                width="100%"
                height="150px"
            />
        </div>
    )
}