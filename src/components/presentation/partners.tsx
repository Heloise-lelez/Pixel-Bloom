import Image from "next/image";
import style from "./partners.module.css";

const Parteners = () => {
  return (
    <div className={style.partners}>
      <Image src="/free_logo.png" alt="Free logomark" width={200} height={83} />
      <Image
        src="/disneyplus_logo.png"
        alt="Disney+ logomark"
        width={200}
        height={108}
      />
      <Image
        src="/park_asterix_logo.png"
        alt="Park Astérix logomark"
        width={200}
        height={104}
      />
      <Image
        src="/futuroscope_logo.png"
        alt="Futuroscope logomark"
        width={200}
        height={142}
      />
      <Image
        src="/amazon_logo.png"
        alt="Amazon logomark"
        width={200}
        height={112}
      />
      <Image src="/iim_logo.png" alt="IIM logomark" width={100} height={100} />
      <Image
        src="/carrefour_logo.png"
        alt="Carrefour logomark"
        width={200}
        height={160}
      />
    </div>
  );
};

export default Parteners;
