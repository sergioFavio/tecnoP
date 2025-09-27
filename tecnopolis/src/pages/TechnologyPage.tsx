import { Link } from "react-router-dom";
import styles from "./TechnologyPage.module.css";

const TechnologyPage = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        <li>
          <Link to="/technology/card_hologram">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <span> - CV Computer Vi..</span>
          </Link>
        </li>
        <li>
          <Link to="/technology/card_ancha">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <span> - AI Generative</span>
          </Link>
        </li>
        <li>
          <Link to="/technology/spread_fx_gallery_nlp">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
            <span> - NLP Natural La..</span>
          </Link>
        </li>
        <li>
          <Link to="/technology/spread_fx_gallery">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <span> - VA Virtual Assi..</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TechnologyPage