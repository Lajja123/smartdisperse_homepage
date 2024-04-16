import React from 'react';
import styles from "./snakesection.module.css";
import home from "../components/homepage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink, faMagnifyingGlassChart, faRectangleList, faShuffle, faShare, faUser, faWallet} from "@fortawesome/free-solid-svg-icons";

function Snakesection() {
  return (
    <div className={styles.snakeSection}>
        <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>SmartDisperse Walkthrough</h3>
          <div className={home.divblock23}></div>
        </div>
    <div className={styles.container}>
      <div className={`${styles.stepWrapper} ${styles.moveLine}`}>
        <article className={`${styles.lineStep} ${styles.lineStep1}`} style={{ left: '56%', top: '-2%' }}> 
          <span className={styles.num}> <FontAwesomeIcon icon={faWallet}  style={{fontSize:"10px"}}/></span>
          <p className={styles.bottom}>
            Connect Wallet
          </p>
        </article>

        <article className={`${styles.lineStep} ${styles.lineStep2}`} style={{right:" -9.5%", top: "17%"}}> 
	<span className={styles.num}> <FontAwesomeIcon icon={faLink} /></span>
	<p className={styles.left}>
        Select Chain
	</p>
</article>
        <article className={`${styles.lineStep} ${styles.lineStep3}`} style={{ left: '68%', top: '44%' }}> 
          <span className={styles.num}> <FontAwesomeIcon icon={faShuffle} /></span>
          <p className={styles.bottom}>
            Select Transactions Type
            <p>
            (same-chain/cross-chain ) </p> 
          </p>
        </article>

        <article className={`${styles.lineStep} ${styles.lineStep4}`} style={{ left: '32%', top: '44.5%' }}> 
          <span className={styles.num}><FontAwesomeIcon icon={faRectangleList} /></span>
          <p className={styles.top}>
            List your transactions
          </p>
        </article>

        <article className={`${styles.lineStep} ${styles.lineStep5}`} style={{ left: '-10.5%', top: '68%' }}> 
          <span className={styles.num}> <FontAwesomeIcon icon={faUser} /></span>
          <p className={styles.right}>
            Verify the Recipient address & amount
          </p>
        </article>

        <article className={`${styles.lineStep} ${styles.lineStep6}`} style={{ left: '21%', top: '93%' }}> 
          <span className={styles.num}><FontAwesomeIcon icon={faShare} /></span>
          <p className={styles.bottom}>
            Send Transactions
          </p>
        </article>

        <article className={`${styles.lineStep} ${styles.lineStep7}`} style={{ left: '53%', top: '93%' }}> 
          <span className={styles.num}> <FontAwesomeIcon icon={faMagnifyingGlassChart} /></span>
          <p className={styles.top}>
            View History of Transactions
          </p>
        </article>

        {/* <article className={`${styles.lineStep} ${styles.lineStep8}`} style={{ left: '86%', top: '93%' }}> 
          <span className={styles.num}> 8</span>
          <p className={styles.bottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur non voluptatem quia,
          </p>
        </article> */}

        <svg width="100%" viewBox="0 0 1156 608" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.path} d="m560.30957,10.588011c0,0 438.0947,1.90476 439.04708,1.90476c0.95238,0 144.57857,-1.02912 143.80934,137.14269c-0.76923,138.17181 -116.81095,142.30859 -131.61967,143.8923c-14.80873,1.58372 -840.41472,-0.71429 -860.5941,0.71429c-20.17938,1.42858 -148.4991,6.80903 -146.83244,147.05973c1.66666,140.2507 129.52365,152.14266 129.33243,151.27321c0.19122,0.86945 815.268425,2.687632 951.42748,0" opacity="0.5" strokeWidth="7" stroke="#2567d1" fill="none"/>
        </svg>
      </div>
    </div>
    </div>
  );
}

export default Snakesection;
