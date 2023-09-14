import { Image } from "../../components/Image/Image";
import { DestinationNav } from "../../containers/DestinationNav/DestinationNav";
import { StatsContainer } from "../../containers/StatsContainer/StatsContainer";
import { useState } from "react";
import styles from "./Destination.module.css";

export const Destination = ({data=[]}) => {
    const [position, setPosition] = useState(0);
    return (
        <div className={styles.destination__container}>
            <div className={styles.destination__content}>
                <div className="page__title">
                    <h2 className="heading__four">
                        01 pick your destination
                    </h2>
                </div>
                <div className={styles.destination_info__container}>
                    <div className={styles.destination_image__container}>
                        <Image imageVariable={data[position].images.png}/>
                    </div>
                    <div className={styles.destination_info__content}>
                        <DestinationNav 
                            data={data} 
                            position={position}
                            setPosition={setPosition}    
                        />
                        <div className={styles.destination_title__container}>
                            <h1 className="heading__two">
                                {data[position].name}
                            </h1>
                        </div>
                        <div className={styles.destination_text__container}>
                            <p className="body__text">
                                {data[position].description}
                            </p>
                        </div>
                        <StatsContainer
                            stats={data[position]}
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}