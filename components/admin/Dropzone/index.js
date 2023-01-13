import {useCallback} from "react";
import {useDropzone} from "react-dropzone";

export default function DropZone() {

    const onDrop = useCallback(acceptedFiles => {
        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log(acceptedFiles[i])
        }
    }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div>
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <div className="dz-message">
                    <p>فایل‌ها را اینجا رها کنید و یا کلیک کنید</p>
                    <span className="note"> تست</span>
                </div>

            </div>
        </div>
    )
}
