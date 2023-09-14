import styles from "./DestinationNav.module.css";
import { v4 as uuid } from "uuid"

export const DestinationNav = ({
    data,
    position,
    setPosition
}) => {
    return (
        <div className={styles.destination_nav__container}>
            <ul className={styles.destination_nav__list}>
            {data.map((item, index) => {
                const handleClick = () => {
                    setPosition(index)
                }
                return (
                    <li className={styles.destination_nav__item} key={uuid()}>
                        <p className={position === index ? styles.active_item : ""} onClick={handleClick}>
                            {item.name}
                        </p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}