import React from "react";
import style from "@/components/Services/servicesBoxes/Services.module.css";

const Services = () => {
  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          {" "}
          <h1>szolgáltatások</h1>
          <h2>akiknek segíthetünk főleg</h2>
        </div>
        <div className={style.boxContainer}>
          <div className={style.boxContainerItems}>1</div>
          <div className={style.boxContainerItems}>2</div>
          <div className={style.boxContainerItems}>3</div>
          <div className={style.boxContainerItems}>4</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
