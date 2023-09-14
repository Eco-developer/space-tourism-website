import { useEffect, useRef, useState } from "react";

export const useInterval = (length, interval = 5000) => {
    const [position, setPosition] = useState(0);
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            return
        }
        setInterval(() => {
            setPosition((prevState) => {
                if (prevState === length - 1) {
                    return 0;
                } else {
                    return prevState+1;
                }
            })
        }, interval)
        didMount.current = true
    }, [length, setPosition, interval])

    return {
        position,
        setPosition
    }
}