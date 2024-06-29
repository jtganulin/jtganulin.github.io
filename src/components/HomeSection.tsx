import styles from "../styles/Home.module.css";

const HomeSection = ({ id, bgIndex, children }: { id?: string; bgIndex: number; children: React.ReactNode; }) => {
    return (
        <section id={id}>
            <div className={styles.homeSection}>
                <div className={styles.homeSectionContent}>
                    {children}
                </div>
            </div>
            <div className={styles.bgContainer}>
                <img src={`/images/Home/${bgIndex}.jpg`} alt={`Homepage background ${bgIndex}`}
                    width="1500" height="2000"
                    style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "fill",
                        objectPosition: "center",
                        aspectRatio: 1.3333
                    }}
                />
            </div>
        </section>
    );
};

export default HomeSection;
