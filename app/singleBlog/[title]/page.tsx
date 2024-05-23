import Button from "@/components/Button";
import { BLOGS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar } from "react-feather";

interface Params {
  params: { 
    title: string
    date: string
    name: string 
    text: string
  }
}

const page = ({ params }: Params) => {
  console.log(params)
  return (
    <section className="text-black">
      <div className="max-container padding-container">
        <div className="text-center flexCenter gap-2 my-12">
          <Calendar />
          <h2 className="">Date</h2>
          <h2 className="">{params.date}</h2>
        </div>
        <div className=" items-center mx-auto max-w-[75%] my-10">
          <h2 className="bold-32 md:bold-40 text-center my-10">Blog Title</h2>
          <h2 className="bold-32 md:bold-40 text-center my-10">{params.title}</h2>
          <div className="flexCenter my-10">
            <Image
              src={"/water.png"}
              alt="deluxe"
              width={800}
              height={100}
              className="w-full"
            />
          </div>
          <p className="py-10">{params.text}</p>
          <div className="flexEnd">
            <Link href={'/blog'}>
              <Button
              type="button"
              title="Read More"
              variant="btn_dark_pink" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
