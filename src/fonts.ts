// import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// export const georgia = localFont({
//   src: "../fonts/georgia.ttf",
//   display: "swap",
//   variable: "--font-georgia",
// });

// export const georgia = localFont({
//   src: [
//     {
//       path: "../fonts/georgia.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/georgiab.ttf",
//       weight: "600",
//       style: "bold",
//     },
//   ],
//   display: "swap",
//   variable: "--font-georgia",
// });
