"use client";

import React, { useState, useEffect } from "react";
import style from "./page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import phone from "../../../public/assets/icons/contanct/3.png";
import emailicon from "../../../public/assets/icons/contanct/2.png";
import direction from "../../../public/assets/icons/contanct/1.png";
import Aos from "aos";
import MapembedApi from "@/components/GoogleMap/EmbedApi/EmbedApi";
import { contactData } from "@/data/data";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Page = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState("Küldés");

  const str = "just a normal string for test!";

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setButton("Küldés folyamaban");
    try {
      await fetch("api/mail", {
        method: "post",
        body: JSON.stringify({ name, email, message }),
      });

      setEmail("");
      setName("");
      setMessage("");
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
            <h1 className={imb.className}>Kapcsolat</h1>
            <h2>Lépjen Velünk kapcsolatba</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>

          <div data-aos="fade" className={style.iconContainer}>
            <div className={style.iconBoxes}>
              {" "}
              <Image className={style.image} alt="phone" src={emailicon} />
              <p>
                <a href="mailto:info@citytax.hu">{contactData.email}</a>
              </p>
            </div>

            <div className={style.iconBoxes}>
              {" "}
              <Image className={style.image} alt="phone" src={direction} />
              <p>{contactData.address}</p>
            </div>

            <div className={style.iconBoxes}>
              <Image className={style.image} alt="phone" src={phone} />
              <div className={style.phone}>
                <a href="tel:+36307993615">{contactData.phone}</a>
                <a href="tel:+36302436942">{contactData.phone2}</a>
              </div>
            </div>
          </div>

          <div className={style.titleContainer2}>
            <h3 className={imb.className}>Kapcsolatfelvételi űrlap</h3>
            <p>
              Miután elküldte az üzenetét, 1 munkanapon belül felvesszük Önnel a
              kapcsolatot!
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
              <div className={style.agreement}>
                {" "}
                <input
                  type="checkbox"
                  id="elfogadCheckbox"
                  name="elfogadCheckbox"
                  required
                />
                <label for="elfogadCheckbox">
                  <a style={{textDecoration:"underline"}} href="/policy">Hozzájárulok adataim kezeléséhez az  adatvédelmi szabályzat alapján.</a>
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
      <div className={style.mapContainer}>
        <MapembedApi />
      </div>
    </>
  );
};

export default Page;
