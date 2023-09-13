import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.error__container}>
            <div className={styles.error_message__container}>
                <h1>
                    404
                </h1>
                <br/>
                <h2>
                    NOT FOUND
                </h2>
            </div>
        </div>
    )
}

export default ErrorPage;