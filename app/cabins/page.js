/* eslint-disable react/no-unescaped-entities */
import { Suspense } from "react";
import CabinList from "./CabinList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "度假屋",
};

export default function Page() {
  // CHANGE

  //164--172
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        臻选奢华木屋
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        温馨与奢华并蓄，我们的木屋坐落于意大利多洛米蒂山脉的腹地。
        试想清晨梦醒，绝美山色尽收眼底；白日里，穿梭于幽深密林间寻幽探胜；
        亦或夜幕降临，在漫天星河下沉浸于私享汤泉，尽享松弛。
        在这处异乡的温馨家园里，与自然之美相拥。
        这是一方许您避世清修、静享安宁的完美天地。欢迎来到人间天堂。
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
