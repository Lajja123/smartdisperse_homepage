import React from 'react'
import home from "../components/homepage.module.css"
import Navbar from './navbar'
import Image from "next/image";
import "../components/chain.css"
import outer from "../assests/outer.png"
import middle from "../assests/middle.png"
import inner from "../assests/inner.png"
import iconLogo from "../assests/disperse.png"
import base from "../assests/base.png"
import scrolll from "../assests/scroll.png"
import eth from "../assests/ethereum.png"
import mode from "../assests/mode.png"
import optimism from "../assests/optimism.png"
import tron from "../assests/tron.webp"
import fast from "../assests/fast.svg"
import Usecases from './Usecases';
import Snakesection from './Snakesection';
import Getsatrtednow from './Getstartednow';
import a from "../assests/1.png";
import b from "../assests/2.png";
import c from "../assests/3.png";



function homepage() {
  return (
  <div>
    <section className={home.homeMain1}>
      <div className={home.sec1}>
      <div className={home.titleSame}>All Chains, One Solution</div>
      <div className={home.titleSame}>Smart-Disperse Your Crypto Transactions!</div>
      <p className={home.peraSame}>Smart-Disperse is the most widely used, extensible, secure cross- chain communications network. Build truly cross-chain applications using the Smart-Disperse Protocol.</p>
      <div className={home.hLaunchMain}>
      <button className={home.hLaunch}>Build ➔</button>
      <button className={home.hLaunch}>Bridge ➔</button>
      </div>
      </div>
      <div className={home.sec12}>
        <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>Supported Chains</h3>
          <div className={home.divblock23}></div>
        </div>
     
        <article className="wrapper">
        <div className="marquee">
          <div className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
          </div>

          <div aria-hidden="true" className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
         
          </div>
        </div>
      </article>
      </div>
    </section>

    <section className={home.homeMain2}>
  <div className={home.sec22}>
      <div className={home.aboutUs}>
          <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>About SmartDisperse</h3>
          <div className={home.divblock23}></div>
        </div>
        <p>Connext is a fast and secure modular interoperability protocol, powered by intents.</p>
      </div>
      <div className={home.gridContentMain}>
      <div className={home.gridContent}>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={b} alt='none' width={100} height={100}/>
      </div>
      <h6>Fast</h6>
      <div className={home.box1Pera}>Connext’s intent layer enables lightning fast crosschain txs and aim to provide.</div>
      </div>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={c} alt='none' width={100} height={100}/>

      </div>
      <h6>Secure</h6>
      <div className={home.box1Pera}>Connext inherits its security from the canonical bridges themselves to secure data and transactions across chains.</div>
      </div>
      <div className={home.gridBox1}>
      <div className={home.gridImg}>
      <Image src={a} alt='none' width={100} height={100}/>
      </div>
      <h6>Developer Friendly</h6>
      <div className={home.box1Pera}>Developers consistently choose Connext for its simplicity, ease of integration, and strong developer support.</div>
      </div>
      </div>22
      </div>
    </div>
    <div className={home.sec21}>
     <div className={home.chainCircle}> 
      <div className={home.outerWrapper}>
        <Image src={outer} style={{width:"100%", height:"100%"}}alt='none'className={home.outercircle}/>
        {/* <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/6463a56fc2f1ffc2e8f32e14_gelato-icon-round.png "width={100} height={100} alt='none'/> */}
      </div>
      <div className={home.logoWrapper}>
      <div className={home.mainlogo}>
      <div className={home.logodiv}>
      <Image src={iconLogo} width={100} height={100} alt='none'/>
        </div>
        </div>
      </div>
      <div className={home.MidWrapper}>
      <Image src={middle} alt='none' className={home.midcircle}/>
      </div>
      <div className={home.innerWrapper}>
      <Image src={inner} alt='none' className={`${home.innercircle} `}/>
      <Image src={base} alt='none' className={`${home.base} ${home.logoinner}`}/>
      <Image src={eth} alt='none' className={`${home.eth} ${home.logoinner}`}/>
      <Image src={optimism} alt='none' className={`${home.optimism} ${home.logoinner}`}/>
      <Image src={mode} alt='none' className={`${home.mode} ${home.logoinner}`}/>
      <Image src={scrolll} alt='none' className={`${home.scrolll} ${home.logoinner}` }/>
      <Image src={tron} alt='none' className={`${home.tron} ${home.logoinner}` }/>
      </div>
    </div>

    <div className={home.flexContent}>
      <h2>Securely connect every blockchain</h2>
      <div className={home.flexpera}>
      Synapse is comprised of a cross-chain messaging framework and an economically secure method to reach consensus on the validity of cross-chain transactions, enabling developers to build truly native cross-chain apps.
      </div>
      <div>
        <button className={home.hApp}>App</button>
      </div>
    </div> 
     
    </div>
    </section>
    <Usecases/>
    <Snakesection/>
    <Getsatrtednow/>

  </div>
  )
}

export default homepage