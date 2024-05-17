import styles from "./LeftNavigation.module.css";
import Lara from "../../assets/Images/ProfileImages/Lara.png";
import Services from "../../assets/Images/Sidebar/Services.svg";

export function LeftNavigation() {
  return (
    <div className={styles.LeftNavigation}>
      <div className={styles.Questionnaire}>
        <section className={styles.Navigation}>
          <div className={styles.UserProfile}>
            <img src={Lara} alt="Lara" className={styles.UserImage} />
            <div className={styles.UserName}>Hi Lara</div>
          </div>
          <div className={styles.Services}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Services</div>
          </div>

          <div className={styles.Community}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Community</div>
          </div>
          <div className={styles.Testimonial}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Testimonial</div>
          </div>
          <div className={styles.Trainers}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Trainers</div>
          </div>
        </section>

        <section className={styles.Subscription}>
          <div classImage={styles.Subscribe}>Subscribe to Fit Mama Hub</div>
          <div className={styles.Rewards}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Rewards</div>
          </div>
          <div className={styles.Settings}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>Settings</div>
          </div>
          <div className={styles.FAQ}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>FAQ</div>
          </div>
          <div className={styles.SignOut}>
            <img
              src={Services}
              alt="Services"
              className={styles.ServicesImage}
            />
            <div className={styles.ServicesTitles}>FAQ</div>
          </div>
        </section>
      </div>
    </div>
  );
}