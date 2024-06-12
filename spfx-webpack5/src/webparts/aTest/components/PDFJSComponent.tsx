import * as React from "react";
// import "../assets/dev";
import "../assets/proud";

export interface IProps {
    neco?: string;
}

export const PDFJSComponent: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div>
            <canvas id="the-pdfjscanvas"/>
        </div>
    )

}