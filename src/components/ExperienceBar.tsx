import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar () {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '80%' }}></div>

                <span className={styles.currentExperience} style={{ left: '80%' }}>
                    300px
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}