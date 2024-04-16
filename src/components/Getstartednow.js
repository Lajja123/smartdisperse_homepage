import React from 'react'
import home from "../components/homepage.module.css"
import usecaseStyle from './usecase.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faLayerGroup} from "@fortawesome/free-solid-svg-icons";
function Getsatrtednow() {
  return (
    <div>
       <div className={usecaseStyle.usecaseMain}>
         <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>Get started now</h3>
          <div className={home.divblock23}></div>
        </div>
      <div className={usecaseStyle.outerdivofusecases}>
       <div className={usecaseStyle.cardcontainer}>
        <div className={usecaseStyle.cards}>
            <div className={usecaseStyle.cardofgetstart}>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Cross-chain</div>
                    <div className={usecaseStyle.cardcontent2}>Unlocking Cross-Chain Transactions: Seamlessly Connect Blockchain</div>
                    <div className={usecaseStyle.buttongetstart}>
                      <div>
                      <button className={usecaseStyle.getstartbtn}>Start now ➔</button>
                      </div>
                    </div>
                </div>
            </div>
            <div className={usecaseStyle.cardofgetstart}>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Same-chain</div>
                    <div className={usecaseStyle.cardcontent2}>Streamlining Same-Chain Transactions: Enhancing Efficiency and Accessibility</div>
                       <div className={usecaseStyle.buttongetstart}>
                        <div>
                      <button className={usecaseStyle.getstartbtn}>Start now ➔</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={usecaseStyle.cardofgetstart}>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Documentation</div>
                    <div className={usecaseStyle.cardcontent2}>Unraveling SmartDisperse: A Comprehensive Guide to Seamless Cross-Chain Communication</div>
                       <div className={usecaseStyle.buttongetstart}>
                        <div>
                      <button className={usecaseStyle.getstartbtn}>Start now ➔</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Getsatrtednow
