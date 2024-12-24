import styles from '../styles/StatsGrid.module.css';

const StatsGrid = () => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statItem}>
        <h2>100%</h2>
        <p>
          With our unique approach, we only take 20% of the development hourly cost initially. If your product succeeds, we will ask for just a 1% equity share, aligning our interests with yours.
        </p>
      </div>
      <div className={styles.statItem}>
        <h2>500 clients</h2>
        <p>
          Over the years, we have successfully assisted numerous startups in bringing their ideas to fruition. Our commitment to your success is unwavering, and we strive to create lasting partnerships.
        </p>
      </div>
      <div className={styles.statItem}>
        <h2>100 projects</h2>
        <p>
          Our team of experts is passionate about innovation and dedicated to providing the best support possible. We believe in the potential of every idea and work tirelessly to make it a reality.
        </p>
      </div>
      <div className={styles.statItem}>
        <h2>50 awards</h2>
        <p>
          Ours has been recognized for its contributions to the startup ecosystem, receiving multiple awards for excellence in service and innovation. We are proud to be a part of your journey.
        </p>
      </div>
    </div>
  );
};

export default StatsGrid;
