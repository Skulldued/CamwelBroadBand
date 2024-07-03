import { IoMdCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import data1 from "../assets/data1.png";

import data2 from "../assets/data2.png";
import data3 from "../assets/data3.png";
import data4 from "../assets/data4.png";
import data5 from "../assets/data5.png";
import data6 from "../assets/data6.png";
import tata from "../assets/tata.jpg";
import airtel from "../assets/airtel.jpg";
import iball from "../assets/iball.jpg";
import logo from "../assets/logo.png";
import why from "../assets/why.png";
import vision from "../assets/vision.svg";
import mission from "../assets/mission.svg";
import { LuChevronRightCircle } from "react-icons/lu";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import cc1 from "../assets/cc1.jpg";
import cc2 from "../assets/cc2.jpg";
import cc3 from "../assets/cc3.jpg";
export const icons = {
  IoMdCall,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  IoMdMailUnread,
  FaHome,
};

export const navLink = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/About",
  },
  {
    title: "Broadband Plans",
    path: "/broadbandplan",
  },
  {
    title: "Computer and Laptop",
    path: "/computer_laptop",
  },
  {
    title: "CCTV Installation",
    path: "/cctv",
  },
  {
    title: "Contact",
    path: "/Contact",
  },
];

export const cardHome = [
  {
    image: data1,
    title: "Data Usage Plan",
    descrption:
      "Data Usage Plan varies by device, apps, available network speeds, and file sizes..",
  },
  {
    image: data2,
    title: "Fair Use Plan",
    descrption:
      "Fair Usage Plan is to be implemented by Broadband on its unlimited broadband plans..",
  },
  {
    image: data3,
    title: "Unlimited Plans",
    descrption:
      "Best Internet Plans offered on Broadband. Unlimited Internet plans up to 100Mbps speed..",
  },
  {
    image: data4,
    title: "Value Added Services",
    descrption:
      "Broadband in patna provide some value added services at reasonable rates.",
  },
  {
    image: data5,
    title: "Best Features",
    descrption:
      "Broadband in patna offers high speed low cost connections on an FTTH platform.",
  },
  {
    image: data6,
    title: "Contact Us",
    descrption: "If you have any questions or comments, Then Contact us",
  },
];

export const partner = [
  {
    images: airtel,
  },
  {
    images: tata,
  },
  {
    images: iball,
  },
];

export const footerMenu = [
  {
    title: "Quicks Links",
    links: [
      { name: "Home", path: "/" },
      { name: "CCTV Installation", path: "/cctv" },
      { name: "Contact", path: "/Contact" },
      { name: "Broadband Plans", path: "/broadbandplan" },
    ],
  },
  {
    Address: "Address",
    addressIcon: FaHome,
    address:
      "JANKI MARKET, BHAGWAT NAGAR CHAURAHA, BHAGWAT NAGAR, KUMHRAR, PATNA - 800026. LANDMARK:- NEAR SINGH CEMENT",
    icon: IoMdCall,
    call: "91+ 9199044666, 8434583494",
    mailIcon: IoMdMailUnread,
    mail: "camwelbroadbandpatna@gmail.com",
  },
];

export const aboutCard = [
  {
    image: why,
    title: "Who we are",
    desc: "Camwel Broadband In Patna is one of the fast growing fixed wireless broadband service providers in Pune. The Company solely focused on delivering High Speed Internet & Internet Solutions to the businesses and families of the area.",
  },
  {
    image: mission,
    title: "Our Mission",
    desc: "Camwel Broadband In Patna is one of the fast growing fixed wireless broadband service providers in Pune. The Company solely focused on delivering High Speed Internet & Internet Solutions to the businesses and families of the area.",
  },
  {
    image: vision,
    title: "Our Vision",
    desc: "To be the online brand specialist, that delivers not just effective solutions but a complete brand experience. And at the same time, maximizing ROI through measurable results: higher sales and better brand equity! Simplicity",
  },
];

export const cardPlandata = [
  {
    title: "Starter Plan",
    number: "100",
    month: ["3Months", "6Months", "1Year"],
    price: ["₹700", "₹634", "₹600"],
    icon: LuChevronRightCircle,
  },
  {
    title: "WFH Plan",
    number: "200",
    month: ["3Months", "6Months", "1Year"],
    price: ["₹900", "₹834", "₹750"],
    icon: LuChevronRightCircle,
  },
  {
    title: "Starter Plan",
    number: "300",
    month: ["3Months", "6Months", "1Year"],
    price: ["₹1150", "₹999", "₹834"],
    icon: LuChevronRightCircle,
  },
];

export const services = [
  {
    image: one,
    title: "Remove Viruses and Malware",
    description:
      "Many people still wrestle with infected Windows PCs. If your computer is infected and isn’t working properly, you don’t have to pay someone else to fix it. The Geek Squad doesn’t have any magic tools – they use many of the standard antivirus tools.",
  },
  {
    image: two,
    title: "Reinstall the Operating System",
    description:
      "Some believe computers slow down and need replacement over time, while others seek repair services. Often, a simple Windows reinstall can quickly resolve issues caused by startup programs and toolbars, making it an effective solution for a sluggish computer.",
  },
  {
    image: three,
    title: "Remove Included Bloatware",
    image: three,
    description:
      "Some think computers slow down and need replacement over time, while others seek repairs. Often, a Windows reinstall can resolve issues caused by startup programs and toolbars, making it an effective solution for a sluggish computer.",
  },
  {
    image: four,
    title: "Upgrade Your RAM or Hard Drive",
    description:
      "Upgrading your computer can be simple. Adding new RAM is easy if you buy the right type. Upgrading or adding a hard drive increases storage but requires reinstalling Windows or moving your existing OS. Though more complex, it's still manageable.",
  },
  {
    image: five,
    title: "Laptop Services",
    description:
      "We offer high-quality, prompt laptop repair services in Pimpri Chinchwad, Pune, with repairs and replacements at 40%-60% lower prices than OEM centers. Trust Om Computers for software installation to chip-level repairs. Contact us via call or email.",
  },
];

export const cctvPageData = [
  {
    image: cc1,
    title: "DVR",
    description:
      "A digital video recorder (DVR) is a consumer device or software that records video in digital format onto local or networked storage devices like disks, USB drives, or SSDs. It encompasses set-top boxes, portable media players, TV gateways, camcorders using SD cards, and PC software for video capture and playback.",
  },
  {
    image: cc2,
    title: "Camera",
    description:
      "Analogue signals can be recorded onto video tape recorders, requiring slow tape speeds for extended operation. This time-lapse method captures frames at about four per second, often resulting in blurry images unless subjects are still. Analog recordings can also be converted to digital format for storage on PCs.",
  },
  {
    image: cc3,
    title: "Wire",
    description:
      "Selecting and installing the right wiring is crucial for a security system. It powers cameras and transmits video to DVRs. Analog or digital system compatibility and local versus remote power sources influence cable choice. Siamese cables, combining power and video wires, simplify installation over separate wiring.",
  },
];


