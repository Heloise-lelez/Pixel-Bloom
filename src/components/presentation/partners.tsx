import Image from "next/image";
import style from "./partners.module.css";

const Parteners = () => {
  return (
    <div className={style.partners}>
      <Image src="/free_logo.png" alt="Free logomark" width={101} height={43} />
      <Image
        src="/disneyplus_logo.png"
        alt="Disney+ logomark"
        width={101}
        height={55}
      />
      <Image
        src="/park_asterix_logo.png"
        alt="Park Astérix logomark"
        width={101}
        height={53}
      />
      <Image
        src="/futuroscope_logo.png"
        alt="Futuroscope logomark"
        width={101}
        height={72}
      />
      <Image
        src="/amazon_logo.png"
        alt="Amazon logomark"
        width={101}
        height={57}
      />
      <Image src="/iim_logo.png" alt="IIM logomark" width={50} height={51} />
      <Image
        src="/carrefour_logo.png"
        alt="Carrefour logomark"
        width={100}
        height={81}
      />
    </div>
  );
};

export default Parteners;
