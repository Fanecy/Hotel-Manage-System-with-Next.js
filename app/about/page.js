import Image from "next/image";
import ab1 from "@/public/about-1.jpg";
import ab2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "关于",
};

function page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          欢迎来到荒野绿洲
        </h1>

        <div className="space-y-8">
          <p>
            此间，自然之美与安逸栖居浑然天成。隐于意大利多洛米蒂山脉的心脏地带，
            这便是您远离尘嚣的世外桃源。这里不仅仅有奢华的木屋，
            更是一场回归自然的旅程，让您与家人重拾那些简单而纯粹的快乐。
          </p>
          <p>
            八间奢华木屋为您筑起温馨的港湾，但真正的自由与宁静，藏匿于群山环抱之间。
            漫步于郁郁葱葱的林间，呼吸清冽纯净的气息；
            或倚暖炉篝火，或浸润汤泉之中，仰望漫天繁星闪烁。
          </p>
          <p>
            在这壮丽的自然景致中，镌刻下难忘的时光。
            请放慢脚步，舒缓身心，去体悟在这绝美画卷中相依相伴的喜悦。
          </p>
        </div>
      </div>

      <div className="aspect-square relative col-span-2">
        <Image
          src={ab1}
          fill
          placeholder="blur"
          quality={100}
          className="object-cover"
          alt="一家人围坐在木屋前的篝火旁"
        />
      </div>

      <div className="aspect-square relative col-span-2">
        <Image
          src={ab2}
          fill
          placeholder="blur"
          quality={100}
          className="object-cover"
          alt="管理荒野绿洲的一家人"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          自 1962 年起，家族世代在此守望
        </h1>

        <div className="space-y-8">
          <p>
            自 1962 年以来，荒野绿洲便是我们家族珍视的隐逸之所。
            从祖父母那一辈起，这方净土便在爱与关怀中被悉心浇灌，
            世代相传，见证了我们为您营造温暖归宿的初心与执着。
          </p>
          <p>
            岁月流转，我们始终守护着荒野绿洲的灵魂，
            将山川的永恒之美与家族经营特有的温情完美融合。
            在这里，您不只是过客，更是我们大家庭的一员。
            期盼您早日造访荒野绿洲，在这个传统与宁静交汇之地，感受宾至如归的温暖。
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              探索我们的度假别墅
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
