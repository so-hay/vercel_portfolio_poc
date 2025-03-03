// "use client"; // Next.jsのクライアントコンポーネントとして定義

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const RotatingNav = () => {
//   const links = ["01", "02", "03", "04","05"];
//   const radius = 150; // 円の半径
//   const [angle, setAngle] = useState(0);

//   // マウスホイールで回転
//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       setAngle((prev) => prev + event.deltaY * 0.1);
//     };

//     window.addEventListener("wheel", handleScroll);
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-80 h-80">
//       {/* 円の背景 */}
//       <div
//         className="absolute inset-0 border border-black rounded-full"
//         style={{ width: radius * 2, height: radius * 2 }}
//       />

//       {/* 各リンク */}
//       {links.map((link, index) => {
//         const step = (360 / links.length) * index;
//         const radian = ((angle + step) * Math.PI) / 180;
//         const x = Math.cos(radian) * radius;
//         const y = Math.sin(radian) * radius;

//         return (
//           <Link
//             key={link}
//             href={`/${link}`}
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"
//             style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
//           >
//             {link}.
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default RotatingNav;
