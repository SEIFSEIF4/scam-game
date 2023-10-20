import styles from "@/styles/mock.module.css";
import Image from "next/image";
import MockUp from "@/public/assets/MockUp_2u.jpg";

interface MockProps {
  width: number;
  height: number;
}

export const Mock = ({ width, height }: MockProps) => {
  return (
    <div className="container flex flex-col justify-between gap-8 mx-auto align-center ">
      {/* <div className="text">
        <p>
          <span className="text-2xl font-bold text-[#dc2626] ">We</span> are
          here to provide a new and exciting game experience our value is
          creating joyful moments, that remain in memory. Scam here to synonym
          people and present them an amazing experience that gives them the
          opportunity to enjoy their time in a fresh way.
        </p>
      </div> */}

      <div className={styles.moContainer}>
        {/* <h1 className={title()}>About</h1> */}
        <div className="flex ">
          <Image
            src={MockUp}
            alt="MockUp"
            width={width}
            height={height}
            className={styles.moc}
          />
        </div>
      </div>
    </div>
  );
};
