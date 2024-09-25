"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAVLINK } from "../NAVINFO";

import classes from "./page.module.scss";

export default function HeaderInPhone({ header }) {
  const [isSelected, setIsSelected] = useState("الرئيسية");

  return (
    <section>
      <div className={classes.logo}>
          <Link href="/">
          <div>
            <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
          </div>
          </Link>
        </div>
      {/* لابتوب */}
      <div className={classes.hedinInPhone}>
        <div className={classes.slidebar}>
        {NAVLINK.map((item) => (
          <Link
              href={item.href}
              style={{ 
                color: 
                isSelected === item.name ? "#1A5319" : "#999", 
                marginTop: -5,
                borderBottom: isSelected === item.name ? "1px solid #1A5319" : ''
              }}
              onClick={() => setIsSelected(item.name)}
              > 
                {item.icon}
            </Link>
          ))}
          </div>
      </div>

      {/* جوال */}
      <div className={classes.hedinInLap}>
        <div className={classes.navbar}>
          {NAVLINK.map((item) => (
            <Link
              href={item.href}
              style={{ 
                color: 
                isSelected === item.name ? "#1A5319" : "#999", 
                marginTop: -5,
                borderBottom: isSelected === item.name ? "1px solid #1A5319" : ''
              }}
              onClick={() => setIsSelected(item.name)}
            > 
                {item.icon}
            </Link>
          ))}
          </div>
      </div>
    </section>
  );
}
