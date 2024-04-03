'use client';
import { play } from "@/lib/suit";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";

export default function Home() {
  const [gameInfo, setGameInfo] = useState('START');
  const [userHand, setUserHand] = useState(0);
  const [botHand, setBotHand] = useState(null)
  const [handSelect, setHandSelect] = useState(<FaRegHandRock className="rotate-90" size={60} />);

  const suit = () => {
    const match = play({ user: { point: userHand } })

    switch (match.detail.bot.point) {
      case 0:
        setBotHand(<FaRegHandRock className="rotate-90" size={60} />)
        break;
      case 1:
        setBotHand(<FaRegHandScissors className="scale-x-[-1]" size={60} />)
        break;
      case 2:
        setBotHand(<FaRegHandPaper className="rotate-90" size={60} />)
        break;
    }

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
      <h1 className="text-5xl text-center">
        {gameInfo}
      </h1>

      <br />

      <div className="flex flex-col justify-center items-center gap-y-7">
        <div className="flex justify-center items-center gap-x-5">

          <div className="">
            {handSelect}
          </div>

          <div>
            <h3 className="font-medium">vs</h3>
          </div>

          {/* Bot hand */}
          <div className="scale-x-[-1]">
            {botHand || <MdQuestionMark className="scale-x-[-1]" size={70} />}
          </div>

        </div>

        <div className="flex flex-col gap-y-3 justify-center items-center">

          <div className="flex gap-x-2">
            <button onClick={() => {
              setHandSelect(<FaRegHandRock className="rotate-90" size={60} />);
              setUserHand(0)
            }} className={`${userHand === 0 ? 'bg-gray-200 outline-none ring ring-black' : ''} rotate-90 h-16 transition duration-300 ease-in-out hover:bg-gray-200 w-16 flex justify-center items-center rounded-md cursor-pointer border border-black`}>
              <FaRegHandRock size={50} />
            </button>
            <button onClick={() => {
              setHandSelect(<FaRegHandScissors className="scale-x-[-1]" size={60} />);
              setUserHand(1)
            }} className={`${userHand === 1 ? 'bg-gray-200 outline-none ring ring-black' : ''} scale-x-[-1] h-16 transition duration-300 ease-in-out hover:bg-gray-200 w-16 flex justify-center items-center rounded-md cursor-pointer border border-black`}>
              <FaRegHandScissors size={50} />
            </button>
            <button onClick={() => {
              setHandSelect(<FaRegHandPaper className="rotate-90" size={60} />);
              setUserHand(2)
            }} className={`${userHand === 2 ? 'bg-gray-200 outline-none ring ring-black' : ''} rotate-90 h-16 transition duration-300 ease-in-out hover:bg-gray-200 w-16 flex justify-center items-center rounded-md cursor-pointer border border-black`}>
              <FaRegHandPaper size={50} />
            </button>
          </div>

          <button className="px-4 py-2 rounded-md text-white bg-black" onClick={() => suit()}>
            SUIT!!!
          </button>
        </div>
      </div>


      <p className="text-gray-500 mt-10 text-sm">
        instagram:
        <Link className="px-2 underline" href={'https://www.instagram.com/defavolia/'} target="_blank">
          defavolia
        </Link>
      </p>


    </main>
  );
}
