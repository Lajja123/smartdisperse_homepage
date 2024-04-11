"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import smartlogo from "../app/logo.png";
import Image from "next/image";
import navStyle from "../components/navbar.module.css"

function navbar() {

  return (
      <div className={navStyle.divtoflexlogoconnectwallet}>
        <div>
          <Link href="/">
            <Image
              className={navStyle.smartlogportal}
              src={smartlogo}
              alt="not foundd"
            />
          </Link>
        </div>
        <div className={navStyle.connectwalletbuttondiv}>
          
       <button className={navStyle.launchapp}>LAUNCH APP</button>
        </div>
      </div>
  
  )
}

export default navbar