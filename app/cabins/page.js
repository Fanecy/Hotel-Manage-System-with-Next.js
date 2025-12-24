import { getCabins } from "../_lib/data-service";
import Counter from "./Counter";

import CabinCard from "@/app/_components/CabinCard";

export const metadata = {
  title: "度假屋",
};

export default async function Page() {
  // CHANGE
  console.log("done");

  const cabins = await getCabins();
  console.log(cabins);

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
