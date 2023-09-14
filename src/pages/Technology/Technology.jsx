import { Image } from "../../components/Image/Image";
import { TechnologyNav } from "../../containers/TechnologyNav/TechnologyNav";
import { useInterval } from "../../hooks";
import styles from "./Technology.module.css";

export const Technology = ({data=[]}) => {
    const {
        position,
        setPosition,
    } = useInterval(data.length);
    return (
        <div className={styles.technology__container}>
              <div className={styles.technology__content}>
                <div className="page__title">
                    <h2 className="heading__four">
                        02 meet your technology
                    </h2>
                </div>
                <div className={styles.technology_info__container}>
                    <div className={styles.technology_image__container}>
                        <Image imageVariable={data[position].images.portrait}/>
                    </div>
                    <div className={styles.technology_info__side}>
                        <TechnologyNav
                            data={data}
                            position={position}
                            setPosition={setPosition}
                        />
                        <div className={styles.technology_info__content}>
                            <div className={styles.technology_subtitle__container}>
                                <h5 className="heading__five">
                                    the technology...
                                </h5>
                            </div>
                            <div className={styles.technology_name__container}>
                                <h2 className="heading__three">
                                    {data[position].name}
                                </h2>
                            </div>
                            <div className={styles.technology_text__container}>
                                <p className="body__text">
                                    {data[position].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}