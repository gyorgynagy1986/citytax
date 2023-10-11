import { redirect } from "next/dist/server/api-utils";
import * as React from "react";


const emailStyles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  wrapper: {
    backgroundColor: "#f5f5f5",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logo: {
    maxWidth: "100px",
  },
  greeting: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  message: {
    marginBottom: "20px",
  },
  contactButton: {
    backgroundColor: "#ff9900",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: "25px",
  },
};

 const EmailTemplate = ({ firstName }) => {
  

  return (
    <div style={emailStyles.container}>
    <img
      src="https://onedrive.live.com/embed?resid=3B0B48C1AF0BA710%211414985&authkey=%21AGz2xERumxSYBAY&width=1500&height=1000"
      width="100"
      height="auto"
      />{" "}
    <div style={emailStyles.header}></div>
    <p style={emailStyles.greeting}>Kedves {firstName} </p>
    <p style={emailStyles.message}>
      Köszönjük, hogy felvette velünk a kapcsolatot. Sikeresen megkaptuk az
      üzeneted, és 24 órán belül válaszolunk rá.
    </p>
    <p>
    Addig is bátran fedezd fel további szolgáltatásaink: {" "}
      <a
        href="https://studiobromo.hu/szolgaltatas-reszletek"
        target="_blank"
        rel="noopener noreferrer"
        >
      ⚙️
      </a>
    </p>
    <p>Ha bármilyen azonnali kérdésed merülne fel, ne habozz és hív fel minket a -36 60 54409 69 -es számon.
    </p>
    <a href="https://studiobromo.hu/#touch" style={emailStyles.contactButton}>
     KAPCSOLAT
    </a>
    <p>
     Üdvözlettel
      <br />
      Studio Bromo
      <br />
      Weboldal készítés és üzemeltetés
    </p>
  </div>
  )
  };

export default EmailTemplate;