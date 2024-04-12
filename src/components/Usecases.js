import React from 'react'
import usecaseStyle from './usecase.module.css';
import Image from 'next/image';
import cardi from "../assests/cards.jpg";

function Usecases() {
  return (
    <div>
      <div className={usecaseStyle.outerdivofusecases}>
       <div className={usecaseStyle.cardcontainer}>
        <div className={usecaseStyle.cards}>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                    <Image className={usecaseStyle.imageincard} src={cardi} alt='none' width={270} />
                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>Cross-chain exchange</div>
                    <div className={usecaseStyle.cardcontent2}>Swap any asset on any blockchain using Synapse’s token swaps</div>
                </div>
            </div>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                    <Image className={usecaseStyle.imageincard} src={cardi} alt='none' width={270}/>
                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>a</div>
                    <div className={usecaseStyle.cardcontent2}>b</div>
                </div>
            </div>
            <div className={usecaseStyle.card}>
                <div className={usecaseStyle.cardimage}>
                    <Image className={usecaseStyle.imageincard} src={cardi} alt='none' width={270}/>
                </div>
                <div className={usecaseStyle.cardcontent}>
                    <div className={usecaseStyle.cardcontent1}>a</div>
                    <div className={usecaseStyle.cardcontent2}>b</div>
                </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Usecases
