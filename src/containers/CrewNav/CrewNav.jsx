import { useEffect, useRef } from "react";
import styles from "./CrewNav.module.css";
import { v4 as uuid } from "uuid"

export const CrewNav = ({
    data,
    position,
    setPosition
}) => {
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            return
        }
        setInterval(() => {
            setPosition((prevPosition) => {
                if (prevPosition === data.length - 1) {
                    return 0;
                } else {
                    return prevPosition+1;
                }
            })
        }, 3000)
        didMount.current = true
    }, [data, setPosition])
    return (
        <div className={styles.crew_nav__container}>
            <div  className={styles.crew_nav__content}>    
                {data.map((item, index) => {
                    const handleClick = () => {
                        setPosition(index)
                    }
                    return (
                        <div 
                            className={`${position === index ? styles.active_item : ""} ${styles.nav_dot}`}
                            key={uuid()}
                            onClick={handleClick}
                        >
                        </div>  
                    )
                })}
            </div>
        </div>
    ) 
}