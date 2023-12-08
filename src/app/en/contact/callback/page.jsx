"use client";

import React, { useState, useEffect } from "react";
import style from "../page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import Aos from "aos";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Page = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [button, setButton] = useState("Send");

  const str = "just a normal string for test!";

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setButton("Sending in progress");
    try {
      await fetch("/api/callback", {
        method: "post",
        body: JSON.stringify({ name, phone }),
      });

      setPhone("");
      setName("");
      setButton("SENT");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h1 className={imb.className}>Callback</h1>
            <h2>Dear Inquirer!</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>

          <div className={style.titleContainer2}>
            <p>
              If you would like a callback, please provide your name and phone
              number. We will contact you as soon as possible.
            </p>{" "}
            <div className={style.btnContainer}></div>
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
                  placeholder="Name*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
              </div>
              <div className={style.inputContainer}>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className={style.input}
                  type="number"
                  placeholder="Phone number*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
              </div>

              <div className={style.agreement}>
                {" "}
                <input
                  type="checkbox"
                  id="acceptCheckbox"
                  name="acceptCheckbox"
                  required
                />
                <label htmlFor="acceptCheckbox">
                  <a style={{ textDecoration: "underline" }} href="/policy">
                    I consent to the processing of my data according to the privacy policy.
                  </a>
                </label>
              </div>

              <div className="w-full">
                <button className={style.btn}>{button}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
