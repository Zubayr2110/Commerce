import './Single.css'
import { SSDingleCOTBtn1, SSDingleCOTBtn2, SSingleCOImg1, SSingleCOT, SSingleCOTB, SSingleCOTH1, SSingleCOTP, SSingleCOTPice } from '../../components/Styled.jsx'
import { useParams } from 'react-router';
import { useGlobalContext } from '../../context.jsx';

export default function Single() {
    const { products } = useGlobalContext()
  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);
  const { image, title, description, price } = singleProduct;
  return (
    <>
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <SSingleCOImg1 src={image} alt="" />
          </div>
          <SSingleCOT>
            <SSingleCOTH1>{title}</SSingleCOTH1>
            <SSingleCOTP>{description}</SSingleCOTP>
            <SSingleCOTPice>${price}</SSingleCOTPice>
            <SSingleCOTB>
              <SSDingleCOTBtn1>
                <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>Buy
              </SSDingleCOTBtn1>
              <SSDingleCOTBtn2>
                <i className="fa-solid fa-heart mainIPCIH"></i> Like
              </SSDingleCOTBtn2>
            </SSingleCOTB>
          </SSingleCOT>
        </div>
      </div>
    </>
  );
}
