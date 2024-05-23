"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";


const page = () => {
  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);


    const data = {
      username: String(e.target.fname.value) + " " + 
      String(e.target.lname.value),
      email: String(e.target.email.value),
      phone: String(e.target.phone.value),
      service: String(e.target.service.value),
      date: String(e.target.date.value),
    };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Booking Sent Successfully");
        setLoading(false);

        //reset the form
        e.target.fname.value = "";
        e.target.lname.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
        e.target.service.value = "";
        e.target.date.value = "";
      }
      if (!response.ok) {
        toast.error("Your booking is not sent, Please try again!");
        setLoading(false);
      }
    }

  return (
    <section className="">
      <div className="">
        <div className="w-full h-[100%] bg-gray-20 py-24">
          {/* <Image 
          src={'/hots.jpg'} 
          alt="book"
          fill/> */}
          <h1 className="z-10 bold-32 md:bold-40 text-center py-12">Book Now</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full flexCenter">
          <div className="bg-[#FBA88F] w-full md:max-w-[40%]">
            <div className="max-container padding-container py-2">
              <h2 className="bold-32 md:bold-40 py-10">
                We will take <br /> care of you!
              </h2>
              <p className="py-2">
                Our treatments are a form of relaxation and enjoyment for the
                body and soul. All services are completed with premium products
                by well-trained, service-oriented staff.
              </p>
              <h3 className="bold-20 md:bold-32 py-4">Get in Touch</h3>
              <p className="regular-16 py-2">
                KK 103 AV, Kimironko <br /> Kigali, Rwanda{" "}
              </p>
              <div className="py-4">
                <span>
                  <b>Phone number:</b> +250 793 901 537
                </span>
                <br />
                <span>
                  <b>Email:</b> cosmasmassagehouseltd@gmail.com
                </span>
              </div>
              <div className="flexEnd py-4">
                <Image
                  src={`/tools.png`}
                  alt="tools"
                  width={300}
                  height={300}
                  className="flexEnd"
                />
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-black/70 text-white w-full md:max-w-[60%] ">
            <div className="max-container padding-container py-10">
              <form
                onSubmit={handleSubmit}
                action=""
                method="post"
                className=""
              >
                <div className="w-full py-2">
                  <label htmlFor="" className="py-2">
                    Name<sub>(required)</sub>
                  </label>
                  <div className="flex gap-4 w-full">
                    <div>
                      <span className="py-2">FirstName</span>
                      <input
                        type="text"
                        name=""
                        id="fname"
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <span className="py-4">LastName</span>
                      <input
                        type="text"
                        name=""
                        id="lname"
                        className="input w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Email<sub>(required)</sub>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="input"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Phone Number<sub>(required)</sub>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="input"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Select Service<sub>(required)</sub>
                  </label>
                  <select name="" id="service" className="input">
                    <option value="">Choose service</option>
                    <option value="" id="service">Geothermal Spa</option>
                    <option value="" id="service">Baths</option>
                    <option value="" id="service">Jacuvva</option>
                    <option value="" id="service">Reflexology</option>
                    <option value="" id="service">Zero Gravity</option>
                    <option value="" id="service">Hot Stone Spa</option>
                  </select>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Date<sub>(required)</sub>
                  </label>
                  <input 
                  type="date" 
                  id="date" 
                  className="input" 
                  />
                </div>
                <div className="py-10">
                  <Button
                    type="submit"
                    title="Book Now"
                    variant="btn_dark_pink"
                    disabled = {loading}
                  />
                  <Toaster richColors />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
