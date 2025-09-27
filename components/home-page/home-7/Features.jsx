const featureData = [
  {
    id: 1,
    icon: "/images/icon/icon_24.svg",
    title: "About Us",
    text: "We are dedicated to providing top-quality aircraft parts and exceptional maintenance services. With years of industry experience, our team of experts ensures that every component meets the highest standards of safety and reliability.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/icon/icon_25.svg",
    title: "Our Mission",
    text: "Our mission is to keep your aircraft flying smoothly and safely. We offer a comprehensive range of aircraft parts, from engines to avionics, sourced from leading manufacturers around the world.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/icon/icon_26.svg",
    title: "Why Choose Us",
    text: "Choosing West Aircraft Parts Trading means choosing unparalleled quality and expertise. Our extensive inventory of aircraft parts ensures that we have what you need when you need it",
    backgroundColor: "#F7EDFF",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-30">{text}</p>
      <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
