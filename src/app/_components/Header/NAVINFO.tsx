import { Home, Search, User } from "lucide-react";
import { CartLink } from "../CartLink";

export const NAVLINK = [
  {
    name: 'الرئيسية',
    href: '/',
    icon: <Home strokeWidth="1.5px"/>
  },
  {
    name: 'البحث',
    href: '/search',
    icon: <Search strokeWidth="1.5px" />
  },
  {
    name: 'السلة',
    href: '/cart',
    icon: <CartLink />
  },
  {
    name: 'الحساب',
    href: '/account',
    icon: <User strokeWidth="1.5px"/>
  },
]