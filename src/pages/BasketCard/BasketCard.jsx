import {
  SRightC,
  SRightC1,
  SRightC3,
  SRightCImg,
  SRightCT,
  SRightCT2,
  SRightCT3,
  SRightCT3I,
} from "../../components/Styled";

import { useGlobalContext } from "../../context";
import {decreaseImg, increseImg} from "../../components/export_img";

export default function BasketCard({
  id,
  title,
  price,
  amount,
  description,
  image,
}) {

  // const { rem, inc, dec, clearAll, amount, total} = useGlobalContext();

  return (
    <SRightC>
      <SRightCImg src={image} alt="img" />
      <SRightC1>
        <SRightCT>{title}</SRightCT>
        <SRightCT2>{description}</SRightCT2>
        <SRightC3>
          <SRightCT3>${price}</SRightCT3>
          <SRightCT3I>
            <img src={decreaseImg} alt="img" style={{ marginLeft: -10 }} />
            <p className="numbers_text">{amount}</p>
            <img src={increseImg} alt="img" />
          </SRightCT3I>
        </SRightC3>
      </SRightC1>
    </SRightC>
  );
}
