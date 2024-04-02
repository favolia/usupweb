'use client';
import Thumbs from "@/componets/thumbs";
import { play } from "@/lib/suit";
import Image from "next/image";
import { useState } from "react";
import { FaRegHandScissors } from "react-icons/fa6";
import { IoThumbsUpOutline } from "react-icons/io5";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function Home() {
  const [gameInfo, setGameInfo] = useState('GUA SAYANG BANGET SAMA UNI BODOAMAT MAU JERAWATAN, KAGA PERNAH JELEK');
  const [userInfo, setUserInfo] = useState(0);

  const suit = () => {
    const match = play()

    setUserInfo(match.detail)

    switch (match.type) {
      case 'TYPE_WIN':
        setGameInfo('WIN')
        break;

      case 'TYPE_LOSE':
        setGameInfo('LOSE')
        break;

      case 'TYPE_DRAW':
        setGameInfo('DRAW')
        break;

      default:
        setGameInfo('START');
        break;
    }

  }

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-5xl text-center">
        GUA SAYANG BANGET SAMA UNI BODOAMAT MAU JERAWATAN, KAGA PERNAH JELEK
        <br />
        ~ dais
      </p>
      <div className="flex justify-center items-center gap-x-5">

        <div className="scale-x-[-1]">
          <FcLikePlaceholder fontSize={70} />
        </div>

        <div className="">
          <FcLike fontSize={70} />
        </div>
        {/* <div className="font-bold">
          lope
        </div> */}

        <div className="scale-x-[-1]">
          <FcLikePlaceholder fontSize={70} />
        </div>
      </div>
      {/* <button className="px-4 py-2 rounded-md text-white bg-black" onClick={() => suit()}>
        play
      </button> */}
    </main>
  );
}
