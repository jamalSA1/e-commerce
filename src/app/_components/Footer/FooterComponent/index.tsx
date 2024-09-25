"use client";
import React from "react";
import { Footer, Media } from "../../../../payload/payload-types";

import classes from "./index.module.scss";
import {
  inclusions,
  noHeaderFooterUrls,
  profileNavItems
} from "../../../constants";
import { usePathname } from "next/navigation";
import { Gutter } from "../../Gutter";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../Button";

export default function FooterComponent({ footer }: { footer: Footer }) {
  const pathname = usePathname();
  const navItems = footer?.navItems || [];

  return (
    <>
    <hr className={classes.hr} />
    <footer
      className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ""}
    >
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion) => (
            <li className="" key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p className="">{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer} style={{ backgroundColor: "black" }}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
            <div>
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </div>
            </Link>

            <p style={{ color: "white" }}>{footer ? footer.copyright : 'حقوق الطبع والنشر غير متوفرة'}</p>

            <div className={classes.socialLinks}>
              {navItems.map((item) => {
                const icon = item?.link?.icon as Media;

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                    style={{ color: "white" } as unknown as string}
                  >
                    <Image
                      src={icon.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                );
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
    </>
  );
}
