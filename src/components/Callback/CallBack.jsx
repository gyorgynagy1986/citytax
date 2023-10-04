import React from "react";
import Button from "@/components/UI/Buttons/Button";
import style from './Callback.module.css'
import Image from 'next/image'
import bcg from '../../../public/assets/sections/services_1.jpg'

//{<Image className={style.bcgImage} alt="callback" src={bcg} /> }

const CallBack = () => {
  return (
    <div className={style.callbackContainer}>
      <div className={style.btnContainer}>
        <h2>
          További <span>információra</span> lenne szüksége? <br /> Kérjen ingyenes
          visszahívsát{" "}
        </h2>
        <Button
          url={"/kapcsoalt"}
          name={"Visszahívást kérek"}
        />
      </div>
    </div>
  );
};

export default CallBack;
