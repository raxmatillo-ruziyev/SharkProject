import { v4 as uuidv4 } from "uuid";
import { cardfive, cardfour, cardone, cardthree, cardsix} from "../assets";

// Navbar
export const navbarData = [
  { id: uuidv4(), text: "HOME" },
  { id: uuidv4(), text: "INVESTING" },
  { id: uuidv4(), text: "TEAM" },
  { id: uuidv4(), text: "BOOKS" },
  { id: uuidv4(), text: "STRATEGY & INDICATORS" },
];
// Card 
export const tradingCards = [
  
  {
    id: uuidv4(),
    title: "Licence and regulation",
    text: "XM  is  a  multi - regulated and licensed broker. Your  security is our and or year since priority follow,team",
    img: cardone,
  },
  {
    id: uuidv4(),
    title: "24/7   SUPPORT",
    text: "Get help round the clock from a  professional, award-winning support team, in 30+ languages.",
    img: cardfour,
  },
  {
    id: uuidv4(),
    title: "10 Years in Industry",
    text: "You're in good hands with XM. We've been serving clients in the 190 countries, since 2009 year.",
    img: cardthree,
  },
  {
    id: uuidv4(),
    title: "Cutting-edge technology",
    text: "Enhance your experience with advanced, use or and  user-friendly platforms, on all your devices.",
    img: cardfour,
  },
  {
    id: uuidv4(),
    title: "Fast registration",
    text: "Open an account within minutes,main wud was were thanks  to our fast processes and helpful team.",
    img: cardfive,
  },
  {
    id: uuidv4(),
    title: "Trust in paymenmt",
    text: "Use global and local payment methods to be again and enjoy fast deposits and withdrawals.",
    img: cardsix,
  },
];
