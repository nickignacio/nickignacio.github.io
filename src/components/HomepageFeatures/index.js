import styles from './styles.module.css';
import Link from '@docusaurus/Link'

function Features() {
  return (
    <div className = {styles.gridrow}>
      <div className ={styles.gridcolumn}>
              <div className={styles.imgcontainer}>
                      <img 
                          src="img/research_interest_device.png" 
                          className={styles.imgimage}
                          />
                      <div className={styles.imgoverlay}>
                              <div className={styles.imgtext}>
                                <Link to="/docs/category/2d-materials-for-neuromorphic-computing/" className={styles.link}>
                                  2D-Materials for Neuromorphic Computing
                                </Link>
                                </div>
                      </div>
              </div>        
      </div>
      <div className ={styles.gridcolumn}>
              <div className={styles.imgcontainer}>
                      <img 
                          src="img/research_interest_stm.png" 
                          className={styles.imgimage}
                          />
                      <div className={styles.imgoverlay}>
                          <div className={styles.imgtext}>
                              <Link to="/docs/category/in-situ-stm-measurements" className={styles.link}>
                                In-situ STM
                              </Link>
                          </div>
                      </div>
              </div>        
      </div>
      <div className ={styles.gridcolumn}>
        <div className={styles.imgcontainer}>
                <img 
                    src="img/research_interest_tetra.png" 
                    className={styles.imgimage}
                    />
                <div className={styles.imgoverlay}>
                    <div className={styles.imgtext}>
                        <Link to="/docs/research/Materials%20Pedagogy/" className={styles.link}>
                            Materials Pedagogy
                        </Link>
                    </div>
                </div>
        </div>        
</div>
</div>
  );
}

export default function HomepageFeatures() {
  return (
            <Features/>
  );
}
