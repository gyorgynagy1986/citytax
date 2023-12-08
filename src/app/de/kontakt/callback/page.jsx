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
  const [button, setButton] = useState("Senden");

  const str = "Nur ein normaler String zum Testen!";

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setButton("Senden läuft");
    try {
      await fetch("/api/callback", {
        method: "post",
        body: JSON.stringify({ name, phone }),
      });

      setPhone("");
      setName("");
      setButton("GESCHICKT");
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h1 className={imb.className}>Rückruf</h1>
            <h2>Sehr geehrter Interessent!</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>

          <div className={style.titleContainer2}>
            <p>
              Wenn Sie einen Rückruf wünschen, geben Sie bitte Ihren Namen und
              Ihre Telefonnummer an. Wir werden uns so schnell wie möglich mit
              Ihnen in Verbindung setzen.
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
                  placeholder="Telefonnummer*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
              </div>

              <div className={style.agreement}>
                {" "}
                <input
                  type="checkbox"
                  id="akzeptierenCheckbox"
                  name="akzeptierenCheckbox"
                  required
                />
                <label htmlFor="akzeptierenCheckbox">
                  <a style={{ textDecoration: "underline" }} href="/policy">
                    Ich stimme der Verarbeitung meiner Daten gemäß der
                    Datenschutzrichtlinie zu.
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
