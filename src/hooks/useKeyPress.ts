import { useCallback, useEffect, useState } from "react";

export const useKeyPress = (targetKey: string, callback?: () => void) => {

    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = useCallback(({ key }: any) => {
        if (key === targetKey) {
            setKeyPressed(true);

            if (callback) {
                callback();
            }
        }
    }, [callback, targetKey]);

    const upHandler = ({ key }: any): void => {
        if (key === targetKey) {
            setKeyPressed(false);
        }

    };
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, [callback]);

    return keyPressed;
};