"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Archive,
  ArrowLeft,
  Briefcase,
  Camera,
  ChevronLeft,
  ChevronUp,
  ChevronsUp,
  Divide,
  GitHub,
  Home,
  Link2,
  Linkedin,
  MessageSquare,
  Monitor,
  Package,
  Plus,
  Share2,
  ShoppingBag,
  User,
  Users,
  X,
} from "react-feather";
import Link from "next/link";

type active = "content" | "product" | "collection";
const Profile = () => {
  const [state, setState] = useState<active>("product");
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState("content");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setShowShareOptions(false);
  };

  const handleShareClick = () => {
    setShowShareOptions(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowBottom(false);
    setShowShareOptions(false);
  };

  const handlePlusClick = () => {
    setShowBottom(true);
  };

  return (
    <div className="flex flex-col bg-white ">
      <div className="bg-[url('/Images/background.jpg')] h-44 w-full object-cover ">
        <div className="justify-between flex px-3 mt-2 ">
          <div className="flex-row flex gap-x-2  max-w-54">
            <ArrowLeft />
            <span className="truncate text-base font-groteskLight">
              {" "}
              Starchild2.0_by_krissannbasor
            </span>
            <Image
              height={22}
              width={22}
              src={"/Icons/verified_tick.svg"}
              alt={""}
            />
          </div>

          <div>
            <Share2 onClick={handleShareClick} />
          </div>
        </div>
        <div className="flex justify-center items-center font-groteskMedium text-white text-2xl mt-10 ">
          #Creatorpreneur
        </div>
      </div>

      <div className=" px-3">
        <div className="relative h-[70px]">
          <div className=" absolute -top-10">
            <div className="h-28 w-28 border-2 border-blue-900 bg-white rounded-full">
              <Image
                className="h-full w-full rounded-full p-1"
                height={80}
                width={80}
                src={"/Images/profile.jpg"}
                alt={""}
              />
            </div>
          </div>
          <div className="absolute left-32 top-3 ">
            <h3 className=" text-darkBlue font-groteskBook font-text-base ">
              Starchild2.0_by_krissannbasor
            </h3>
            <span className="px-3 py-1 text-[10px] font-groteskMedium bg-blue-200 text-lightBlue rounded-sm ">
              Actor
            </span>
          </div>
        </div>
        <div className="flex flex-col px-5 mt-2 font-groteskLight">
          <div className=" text-xs text-cyan-800 font-semibold">
            Equalist | Animal Lover | Happy Child
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            Social Media - krissann@theplugmedia.in
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            @theplugmedia.in
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            Acting Inquiries on -{" "}
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            teamkrissann@gmail.com@talentgram.agency{" "}
          </div>
          <Link
            className="flex gap-x-1 text-xs text-cyan-800 items-center  font-extrabold underline font-groteskBook"
            href="https://www.instagram.com/krissannb"
            target="_blank"
          >
            <Link2 size={17} className="-rotate-45 " />
            https://www.instagram.com/krissannb
          </Link>
        </div>
        <section className="px-1 my-5 pb-3 flex items-center justify-between w-full">
          <div className="flex flex-col items-center px-8">
            <div className="flex items-center gap-x-1">
              <ShoppingBag color="#617be8" className="h-5 w-5" />
              <span className="text-center font-groteskMedium text-[20px] text-[#617be8]">
                52
              </span>
            </div>
            <div className="text-center font-grotesk25 text-[15px] font-bold ml-2 text-darkBlue">
              products
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-x-1 justify-center">
              <User color="#617be8" className="h-5 w-5" />
              <span className="text-center font-groteskMedium text-[20px]  text-[#617be8]">
                1M
              </span>
            </div>
            <div className="text-center font-bold font-grotesk25 text-[15px] ml-2 text-darkBlue">
              followers
            </div>
          </div>
          <div className="flex h-8 w-28 items-center justify-center gap-x-2 ml-4 mr-4 rounded-lg bg-lightBlue font-groteskBook text-[11px] text-white shadow-[2px_2px_0px_0px_#AB1AA1]">
            <Image
              width={20}
              height={20}
              src={"/Icons/plus-white.svg"}
              alt="Image"
            />
            Follow
          </div>
        </section>
        <div className="flex flex-row mt-5 justify-center items-center cursor-pointer border-transparent hover:border-darkBlue transition-colors duration-200 font-groteskBook">
          <div className="flex w-full justify-around ">
            <div
              onClick={() => {
                setSelected("content");
              }}
              className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
                selected === "content" ? "border-b-2 border-darkBlue" : ""
              }`}
            >
              <div className="flex flex-row gap-x-1 items-center justify-center">
                <Monitor
                  color={selected === "content" ? "#617be8" : "#8C8C8C"}
                  size={17}
                />
                <span
                  className={`${
                    selected === "content" ? "text-darkBlue" : "text-unselected"
                  }`}
                >
                  Content
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                setSelected("collection");
              }}
              className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
                selected === "collection" ? "border-b-2 border-darkBlue" : ""
              }`}
            >
              <div className="flex flex-row gap-x-1 items-center justify-center">
                <Archive
                  color={selected === "collection" ? "#617be8" : "#8C8C8C"}
                  size={17}
                />
                <span
                  className={`${
                    selected === "collection"
                      ? "text-darkBlue"
                      : "text-unselected"
                  }`}
                >
                  Collection
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                setSelected("product");
              }}
              className={`flex flex-col items-center gap-y-1 justify-center w-32 ${
                selected === "product" ? "border-b-2 border-darkBlue" : ""
              }`}
            >
              <div className="flex flex-row gap-x-1 items-center justify-center">
                <Package
                  color={selected === "product" ? "#617be8" : "#8C8C8C"}
                  size={17}
                />
                <span
                  className={`${
                    selected === "product" ? "text-darkBlue" : "text-unselected"
                  }`}
                >
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-black flex-col justify-center items-center flex">
          {selected === "content" && (
            <div className="grid grid-cols-2 ">
              {Array.from({ length: 6 }).map((_, index) => (
                <Image
                  height={80}
                  width={250}
                  src={"/Images/content.jpeg"}
                  className=" px-2 rounded-xl py-2 "
                  alt="img"
                  key={index}
                />
              ))}
            </div>
          )}
          {selected === "product" && (
            <div className="grid grid-cols-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <Image
                  height={80}
                  width={250}
                  src={"/Images/product.webp"}
                  className=" px-2 rounded-xl py-2 "
                  alt=""
                  key={index}
                />
              ))}
            </div>
          )}{" "}
          {selected === "collection" && (
            <div className="grid grid-cols-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <Image
                  height={80}
                  width={250}
                  src={"/Images/collection.jpg"}
                  className=" px-2 rounded-xl py-2 "
                  alt=""
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
        <div className="sticky h-16 w-full bg-black bottom-0 rounded-t-md justify-center items-center flex font-groteskBook">
          <div className="justify-between flex items-center mx-4 my-1 text-xs w-full">
            <div className="flex flex-col justify-center items-center">
              <Home />
              <span>Home</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Camera />
              <span>Feed</span>
            </div>
            <div
              onClick={() => {
                setOpen(true);
                console.log(open);
              }}
              className="flex flex-col items-center w-20  cursor-pointer
              gap-y-1 text-white   justify-center"
            >
              <div>
                <div className="rounded-full bg-zinc-900 relative shadow-[#592EBF] shadow-md  ">
                  <ChevronUp />
                </div>
              </div>
              <div className="text-xs text-nowrap">Get Started</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Briefcase />
              <span>My Items</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Users />
              <span>Me</span>
            </div>
          </div>
        </div>
        <div
          onClick={handleOpen}
          className="flex flex-col items-center w-20  cursor-pointer
          gap-y-1 text-white   justify-center"
        ></div>
        {open ? (
          <div className="w-full h-fit bg-black fixed max-w-[450px] rounded-t-2xl bottom-0 flex flex-col items-center justify-center ">
            <div className="grid grid-cols-2 gap-3  p-4 py-5">
              <Image
                className="rounded-xl "
                src="/Images/brand-deals.svg"
                alt=""
                width={400}
                height={250}
              />

              <Image
                className="rounded-xl"
                src="/Images/youtube-merch.svg"
                alt=""
                width={400}
                height={250}
              />

              <Image
                className="rounded-xl"
                src="/Images/recreate.svg"
                alt=""
                width={400}
                height={250}
              />

              <Image
                className="rounded-xl"
                src="/Images/recommende.svg"
                alt=""
                width={400}
                height={250}
              />
            </div>
            <div className="flex mt-4 w-full px-4 mb-4 gap-x-4 items-start justify-start font-groteskBook">
              <div className="text-white border border-white border-dashed p-1 flex items-start">
                <Plus onClick={handlePlusClick} />
              </div>
              <div className="text-white font-bold ">My Drafts</div>
            </div>
            <X className="border rounded-full mb-4 " onClick={handleClose} />
          </div>
        ) : null}
        {showShareOptions ? (
          <div className=" flex flex-row w-full h-fit bg-black fixed max-w-[450px] rounded-t-2xl bottom-0 items-center justify-center ">
            <div className="flex flex-col justify-center items-center mx-4 my-4">
              <a href="https://github.com/SanjanaVeeranna">
                <GitHub size={35} className="mx-3 px-1" />
                <span>GitHub</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center mx-4 my-4">
              <a href="https://www.linkedin.com/in/sanjana-veeranna">
                <Linkedin size={35} className="mx-3 px-1" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center mx-4 my-4">
              <a href="mailto:sanjanaveeranna14gmail.com">
                <MessageSquare size={35} className="mx-3 px-1" />
                <span>Email</span>
              </a>
            </div>

            <X
              size={20}
              className="absolute top-2 right-3 "
              onClick={handleClose}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
