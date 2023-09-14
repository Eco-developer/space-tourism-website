import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
    const onGoToDestination = () => {
        navigate("/destination")
    }
    return (
        <div className={styles.home__container}>
            <div className={styles.home_info__container}>
                <div className={styles.home_info__text}>
                    <h5 className="heading__five">
                        So, you want to travel to
                    </h5>
                    <br/>
                    <h1 className="heading__one">
                        Space
                    </h1>
                    <br/>
                    <p className="body__text">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div 
                    className={styles.home_info__button} 
                    onClick={onGoToDestination}
                >
                    <h2>
                        EXPLORE
                    </h2>
                </div>
            </div>
        </div>
    )
}