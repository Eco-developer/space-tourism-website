import styles from "./CrewNav.module.css";
import { v4 as uuid } from "uuid"

export const CrewNav = ({
    data,
    position,
    setPosition
}) => (
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