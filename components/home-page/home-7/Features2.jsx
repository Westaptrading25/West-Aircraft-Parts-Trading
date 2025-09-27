const Features2 = () => {
  const listItems = [
    "Exceptional Communication Enjoy seamless communication and support from our experienced staff.",
    "Cutting-Edge Solutions Experience the best in aircraft parts design and trading.",
    "Connect with Us Reach out via email for personalized assistance.",
  ];

  const platformButtons = [
    {
      href: "#",
      imgSrc: "/images/icon/apple.svg",
      imgAlt: "media",
      platform: "App store",
    },
    {
      href: "#",
      imgSrc: "/images/icon/playstore.svg",
      imgAlt: "media",
      platform: "Google play",
    },
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0">
          Grow Your <span>Aviation</span> Business with Our Services.
        </h2>
      </div>
      {/* /.title-style-four */}
      <p className="text-lg pt-35 pb-30 lg-pb-10">
        Comprehensive Support for Every Need We recognize that challenges and
        questions can arise. Our dedicated team is always ready to provide the
        assistance you need.
      </p>
      <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <div className="d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30">
        {platformButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`d-flex align-items-center ${
              button.platform === "App store" ? "ios-button" : "windows-button"
            }`}
          >
            <img
              src={button.imgSrc}
              alt={button.imgAlt}
              className="lazy-img icon"
            />
            <div>
              <span>Download on the</span>
              <strong>{button.platform}</strong>
            </div>
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Features2;
