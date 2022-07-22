import React, { FC } from "react";
import './style.css';

export const InputFroWords = (props: any) => {

    const { height, width, value, handlerText } = props;

    const style = {
        width: width ?? 200,
        height: height ?? 30
    };

    return (
        <input style={style} value={value} onChange={handlerText} />
    );
};