import FB from "../assets/logos/facebook.svg";
import IG from "../assets/logos/instagram.svg";
import YT from "../assets/logos/youtube.svg";
import X from "../assets/logos/twitter.svg";
import LIn from "../assets/logos/linkedin.svg";
import Pinterest from "../assets/logos/pinterest.svg";
// payment icons
import Visa from "../assets/logos/visa.png";
import Mastercard from "../assets/logos/mastercard.png";
import Maestro from "../assets/logos/maestro.png";
import Rupay from "../assets/logos/rupay.png";
import Paytm from "../assets/logos/paytm.png";
import AmericanExpress from "../assets/logos/american-express.png";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export const policyItems = [
  { name: "Payment Options", link: "#" },
  { name: "Returns", link: "#" },
  { name: "Privacy Policies", link: "#" },
];

export const paymentOptions = [
  Visa,
  Mastercard,
  Maestro,
  AmericanExpress,
  Rupay,
  Paytm,
];

export const socialMedia = [
  { icon: IG, link: "#", name: "instagram" },
  { icon: FB, link: "#", name: "facebook" },
  { icon: Pinterest, link: "#", name: "pinterest" },
  { icon: LIn, link: "#", name: "linkedin" },
  { icon: YT, link: "#", name: "youtube" },
  { icon: X, link: "#", name: "twitter" },
];
