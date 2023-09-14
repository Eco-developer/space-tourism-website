import { Image } from "../../components/Image/Image";
import { CrewNav } from "../../containers/CrewNav/CrewNav";
import { useState } from "react";
import styles from "./Crew.module.css";

export const Crew = ({data=[]}) => {
    const [position, setPosition] = useState(0);
    return (
        <div className={styles.crew__container}>
            <div className={styles.crew__content}>
                <div className={`${styles.crew__title} page__title`}>
                    <h2 className="heading__four">
                        02 meet your crew
                    </h2>
                </div>
                <div className={styles.crew_info__container}>
                    <div className={styles.crew_image__container}>
                        <Image imageVariable={data[position].images.png}/>
                    </div>
                    <div className={styles.crew_info__side}>
                        <CrewNav
                            data={data}
                            position={position}
                            setPosition={setPosition}
                        />
                        <div className={styles.crew_info__content}>
                            <div className={styles.crew_role__container}>
                                <h5 className="heading__five">
                                    {data[position].role}
                                </h5>
                            </div>
                            <div className={styles.crew_name__container}>
                                <h2 className="heading__three">
                                    {data[position].name}
                                </h2>
                            </div>
                            <div className={styles.crew_text__container}>
                                <p className="body__text">
                                    {data[position].bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}