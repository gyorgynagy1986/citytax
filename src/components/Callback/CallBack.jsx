import React from "react";
import Button from "@/components/UI/Buttons/Button";
import style from './Callback.module.css'

const CallBack = () => {
  return (
    <div className={style.callbackContainer}>
      <div className={style.btnContainer}>
        <h2>
          További információra lenne szüksége? <br /> Kérjen ingyenes
          visszahívsát{" "}
        </h2>
        <Button
          heroColor={true}
          url={"/kapcsoalt"}
          name={"Visszahívást kérek"}
        />
      </div>
    </div>
  );
};

export default CallBack;
