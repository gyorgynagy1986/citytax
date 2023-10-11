"use client";

import React, { useState } from "react";
import style from "./page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import phone from "../../../public/assets/icons/contanct/3.png";
import emailicon from "../../../public/assets/icons/contanct/2.png";
import direction from "../../../public/assets/icons/contanct/1.png";
import { MdPhoneAndroid, MdAlternateEmail, MdOutlineMap } from "react-icons/md";
import Map from "@/components/GoogleMap/map";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (event) => {
    event.preventDefault();

    try {
      await fetch("api/mail", {
        method: "post",
        body: JSON.stringify({ name, email, message }),
      });

      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h1 className={imb.className}>Kapcsolat</h1>
            <h2>Lépj Velünk Kapcsolatba</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>

          <div className={style.iconContainer}>
            <div className={style.iconBoxes}>
              {" "}
              <Image className={style.image} alt="phone" src={emailicon} />
              <p>
                <a href="mailto: abc@example.com">email@email.com</a>
              </p>
            </div>

            <div className={style.iconBoxes}>
              {" "}
              <Image className={style.image} alt="phone" src={direction} />
              <p>6900 Makó, Hold utca 26</p>
            </div>

            <div className={style.iconBoxes}>
              <Image className={style.image} alt="phone" src={phone} />
              <p>06 30 000 00 00</p>
            </div>
          </div>

          <div className={style.formContainer} data-aos="fade-up">
            <form
              className={style.form}
              method="post"
              onSubmit={handleSendEmail}
            >
              <div className={style.inputContainer}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className={style.input}
                  type="text"
                  placeholder="Név*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
              </div>

              <div className={style.inputContainer}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={style.input}
                  type="email"
                  placeholder="Email cím*"
                  name="email"
                  required="required"
                  data-error="Valid email is required."
                />
              </div>
              {/* End .col-12 */}

              <div className={style.inputContainer}>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Üzenet*"
                  className={style.inputTextarea}
                  name="message"
                  value={message}
                  required="required"
                  data-error="Please,leave us a message."
                />
              </div>

              {/* End .col-12 */}

              <div className="w-full">
                <button className={style.btn}>küldés</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
      </div>
    </>
  );
};

export default Page;
