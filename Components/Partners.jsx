import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo1.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo2.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo3.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo4.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo5.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo6.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo7.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo8.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
  ];
  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2">
              <div className="section__title">
                <h2>Our Parners</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, magnam velit. Nostrum esse magni est, dicta impedit alias distinctio, aliquam voluptas delectus ex, beatae porro ipsam ipsa tenetur dignissimos eveniet.
                  Quia omnis dicta incidunt quae accusantium tempore, ipsum doloremque quas mollitia laborum aliquam ex quidem at temporibus facilis explicabo odio corrupti deleniti reprehenderit! Totam odio repellat recusandae minus provident pariatur</p>
              </div>
          </div>
        </div>
        <div className="row">
          {
          partners.map((partner,index)=>(
            <div key={index} className="col-6 col-lg-3"> 
              <a href={partner.link} className="partner">
                <img src={partner.image} alt="" />
                <p>{partner.name}</p>
              </a>
            
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
};

export default Partners;
