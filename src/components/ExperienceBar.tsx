export function ExperienceBar () {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '80%' }}></div>

                <span className="current-experience" style={{ left: '80%' }}>
                    300px
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}