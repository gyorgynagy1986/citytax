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
  const [button, setButton] = useState("Küldés");

  const str = "just a normal string for test!";

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setButton("Küldés folyamaban");
    try {
      await fetch("/api/callback", {
        method: "post",
        body: JSON.stringify({ name, phone }),
      });

      setPhone("");
      setName("");
      setButton("ELKÜLDVE");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h1 className={imb.className}>Visszahívás</h1>
            <h2>Kedves Érdeklődő!</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>

          <div className={style.titleContainer2}>
            <p>
              Amennyiben visszahívást szeretne kérni, kérjük, adja meg nevét és
              telefonszámát. Így a lehető leghamarabb felvesszük Önnel a
              kapcsolatot.
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
                  placeholder="Név*"
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
                  placeholder="Telefonszám*"
                  name="name"
                  required="required"
                  data-error="Name is required."
                />
              </div>

              {/* End .col-12 */}

              <div className={style.agreement}>
                {" "}
                <input
                  type="checkbox"
                  id="elfogadCheckbox"
                  name="elfogadCheckbox"
                  required
                />
                <label htmlFor="elfogadCheckbox">
                  <a style={{ textDecoration: "underline" }} href="/policy">
                    Hozzájárulok adataim kezeléséhez az adatvédelmi szabályzat
                    alapján.
                  </a>
                </label>
              </div>

              {/* End .col-12 */}

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
