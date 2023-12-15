import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="conteiner">
        <div className="leftsidebar">
          <div className="leftsidebar_content">
            <button className="leftsidebar_content-button1">
              <img
                src="/images/Menu book.svg"
                alt="img"
                className="leftsidebar_content-button1-img"
              />
            </button>
            <button className="leftsidebar_content-button2">
              <img
                src="/images/Person.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src="/images/Account balance wallet.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src="/images/Settings.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src="/images/Email.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src="/images/Pie chart.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src="/images/Chat bubble.svg"
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
          </div>
        </div>
        <div className="main">
          <div className="main_content">
            <header>
              <div className="header_text">
                <p className="header_text1" id="nicname">
                  Zubayr
                </p>
                <p className="header_text2">Welcome Back</p>
              </div>
              <form className="searchbar">
                <img
                  src="/images/Search.svg"
                  alt="img"
                  className="searchbar_img"
                />
                <input type="text" id="header_search" placeholder="Search" />
              </form>
            </header>
            <div className="main_content-banner">
              <h1>
                Make Your First Order and Get <span> 50% Off</span>
              </h1>
              <p className="main_content-banner-p">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without.
              </p>
              <button className="main_content-banner-btn">Order Now </button>
            </div>
            <div className="menu">
              <p className="menu_text1">Our Menu</p>
              <div className="menu_content">
                <img src="/images/Group 2.svg" alt="img" />
                <p className="menu_content-text">Pizza</p>
              </div>
              <div className="menu_content1">
                <img src="/images/Group 2 (1).svg" alt="img" />
                <p className="menu_content-text">Burger</p>
              </div>
              <div className="menu_content1">
                <img src="/images/Group 2 (2).svg" alt="img" />
                <p className="menu_content-text">Fries</p>
              </div>
              <div className="menu_content1">
                <img src="/images/Group 2 (3).svg" alt="img" />
                <p className="menu_content-text">Pack</p>
              </div>
              <p className="menu_text2">See All</p>
            </div>
            <div className="items">
              <div className="items1">
                <h3>
                  Pizza <br /> with Peperoni
                </h3>
                <p className="items1-2">14-20 minutes</p>
                <div className="items1-3">
                  <p id="text"></p>
                  <button id="btn">+</button>
                </div>
              </div>
              <div className="items2">
                <h3>
                  Pizza <br /> with Cheese
                </h3>
                <p className="items1-2">16-25 minutes</p>
                <div className="items1-3">
                  <p id="tex">1</p>
                  <button id="bt">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightsidebar">
          <div className="rightsidebar_content">
            <div className="rightsidebar_content-1">
              <img src="/images/unsplash_WNoLnJo7tS8.svg" alt="" />
              <p className="rightsidebar_content-1-text">Zubayr To'lqinov</p>
              <img
                src="/images/Notifications none.svg"
                alt="img"
                className="rightsidebar_content-1-n"
              />
            </div>
            <div className="rightsidebar_content-2"></div>
            <ul className="rightsidebar_content-2-ul">
              <li className="rightsidebar_content-2-item">Order Menu</li>
              <li className="rightsidebar_content-2-item1">See All</li>
            </ul>
            <div className="rightsidebar_content-3">
              <div className="rightsidebar_content-3-1">
                <p className="rightsidebar_content-3-1-1">
                  Pizza with Mushrooms
                </p>
                <p className="rightsidebar_content-3-1-2">8 inch</p>
                <p className="rightsidebar_content-3-1-3">$12</p>
                <div className="numbers">
                  <img
                    src="/images/decrease.svg"
                    alt="img"
                    style={{ marginLeft: -10 }}
                  />
                  <p className="numbers_text">01</p>
                  <img src="/images/increse.svg" alt="img" />
                </div>
              </div>
              <div className="rightsidebar_content-3-2">
                <p className="rightsidebar_content-3-1-1">Meat with Potato</p>
                <p className="rightsidebar_content-3-1-2">Extra tomato </p>
                <p className="rightsidebar_content-3-1-3">$40</p>
                <div className="numbers">
                  <img
                    src="/images/decrease.svg"
                    alt="img"
                    style={{ marginLeft: -10 }}
                  />
                  <p className="numbers_text">01</p>
                  <img src="/images/increse.svg" alt="img" />
                </div>
              </div>
            </div>
            <ul className="price">
              <li className="price-li">Total Price</li>
              <p className="price_li">$52</p>
            </ul>
            <button className="buttonfn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}