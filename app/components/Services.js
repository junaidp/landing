import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.heading}>Our Services</h2>
      <p className={styles.intro}>
        At Ours, we offer a wide range of services designed to bring your ideas to life and support your journey from start to finish.
      </p>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Product Development</h3>
          <p>
            From concept to creation, we provide expert guidance and development services to help you launch your product.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Business Consulting</h3>
          <p>
            We help you strategize, plan, and execute your ideas with confidence, ensuring long-term success.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Technology Solutions</h3>
          <p>
            Leverage cutting-edge technology tailored to your needs to achieve your goals efficiently.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Marketing & Branding</h3>
          <p>
            Build a strong brand presence with our innovative marketing strategies and branding expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
