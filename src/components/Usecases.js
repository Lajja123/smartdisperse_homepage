import React from 'react'
import usecaseStyle from './usecase.module.css';
import Image from 'next/image';
import cardi from "../assests/cards.jpg";
import home from "../components/homepage.module.css"
import a from "../assests/a.png";
import b from "../assests/b.png";
import c from "../assests/c.png";
function Usecases() {
  return (
    <div className={usecaseStyle.usecaseMain}>
         <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>Usecase</h3>
          <div className={home.divblock23}></div>
        </div>
      <div className={usecaseStyle.outerdivofusecases}>
       <div className={usecaseStyle.cardcontainer}>
        <div className={usecaseStyle.cards}>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                <Image src={a} alt='none' width={90} />
                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Cross-chain exchange</div>
                    <div className={usecaseStyle.cardcontent2}>Swap any asset on any blockchain using Synapse’s token swaps</div>
                </div>
            </div>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                <Image src={b} alt='none' width={90} />

                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Chain Interoperability</div>
                    <div className={usecaseStyle.cardcontent2}>Send token to multiple recipient on different chains according to their preferences</div>
                </div>
            </div>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                <Image src={c} alt='none' width={90} />
               
                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Multi-Wallet Transfers</div>
                    <div className={usecaseStyle.cardcontent2}>Send funds to multiple wallets simultaneously, catering to various use cases.</div>
                </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Usecases
