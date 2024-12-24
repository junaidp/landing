import Head from "next/head";
import styles from "../styles/Pricing.module.css";

const PricingPlans = () => {
  const selectPlan = (plan) => {
    alert(`You selected the ${plan} plan.`);
  };

  return (
    <>
      <Head>
        <title>Pricing Plans</title>
      </Head>
      <div className={styles.container}>
        <h1>Pricing Plans</h1>
        <p className={styles.subtitle}>
          Choose the best option that suits your project needs and budget.
        </p>

        <div className={styles.pricingContainer}>
          <div className={styles.pricingCard}>
            <h2 className={styles.planName}>Hourly Rate</h2>
            <div className={styles.price}>$30/hr</div>
            <p className={styles.description}>
              Ideal for those who prefer flexibility in payments.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                Pay as you go for development services.
              </div>
            </div>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Select Hourly Rate
            </button>
          </div>

          <div className={styles.pricingCard}>
            <h2 className={styles.planName}>Sharing Basis</h2>
            <div className={styles.price}>20% upfront</div>
            <p className={styles.description}>
              Perfect for startups with limited upfront capital.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                Only pay 20% of the development costs upfront.
              </div>
              <div className={styles.feature}>
                1% revenue share after product launch.
              </div>
            </div>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              Choose Sharing Basis
            </button>
          </div>

          <div className={styles.pricingCard}>
            <h2 className={styles.planName}>Special Offers</h2>
            <div className={styles.price}>Varies</div>
            <p className={styles.description}>
              Contact us for potential discounts on long-term projects.
            </p>
            <div className={styles.features}></div>
            <button className={`${styles.button} ${styles.blueButton}`}>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
