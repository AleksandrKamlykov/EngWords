import { useState } from 'react';
import React, { useEffect, useRef } from 'react';

export const useCoords = () => {

    const [coords, setCoords] = useState<any>({ x: 0, y: 0 });

    const getCoords = (event: MouseEvent) => {

        setCoords({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', getCoords);
        return () => {
            window.removeEventListener('mousemove', getCoords);

        };
    }, []);

    return coords;
};