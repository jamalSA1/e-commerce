import React from "react";

import { Page } from "../../../payload/payload-types";
import { HighImpactHero } from "../../_heros/HighImpact";
import { LowImpactHero } from "../../_heros/LowImpact";
import { MediumImpactHero } from "../../_heros/MediumImpact";
import { CustomHero } from "../../_heros/CustomHero";

const heroes = {
  customHero: CustomHero,
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero
};

export const Hero: React.FC<Page["hero"]> = (props) => {
  const { type } = props || {};

  if (!type || type === "none") return null;

  const HeroToRender = heroes[type];

  if (!HeroToRender) return null;

  return (
    <div>
      <HeroToRender {...props} />
    </div>
  );
};
