import styles from "./StatsContainer.module.css";
import { v4 as uuid } from "uuid"

const statsItems = [
    {
        title: "avg. distance",
        property: "distance",
    },
    {
        title: "est. travel time",
        property: "travel",
    },
]

export const StatsContainer = ({stats}) => (
    <div className={styles.destination_stats__container}>
        {statsItems.map((statItem) => (
            <div className={styles.destination_stat} key={uuid()}>
                <div className={styles.destination_stat__title}>
                    <h5 className="subheading__two">
                        {statItem.title}
                    </h5>
                </div>
                <div>
                    <p className="subheading__one">
                        {stats[statItem.property]}
                    </p>
                </div>
            </div>
        ))}
    </div>
)