import styles from "./TechnologyNav.module.css";
import { v4 as uuid } from "uuid"

export const TechnologyNav = ({
    data,
    position,
    setPosition
}) => (
    <div className={styles.technology_nav__container}>
        <div  className={styles.technology_nav__content}>    
            {data.map((item, index) => {
                const handleClick = () => {
                    setPosition(index)
                }
                return (
                    <div 
                        className={`${position === index ? styles.active_item : ""} ${styles.nav_button}`}
                        key={uuid()}
                        onClick={handleClick}
                    >
                        <p>
                            {index+1}
                        </p>
                    </div>  
                )
            })}
        </div>
    </div>
) 