import React from "react";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "/images/hats.png",
          size: "large",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "/images/jackets.png",
          size: "large",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imageUrl: "/images/sneakers.png",
          size: "large",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          imageUrl: "/images/womens.png",
          size: "large",
          id: 4,
          linkUrl: "womens",
        },
        {
          title: "mens",
          imageUrl: "/images/men.png",
          size: "large",
          id: 5,
          linkUrl: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <section className="container home-page">
        <div className="row">
          {this.state.sections.map((item) => {
            const { title, imageUrl, linkUrl } = item;
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 ">
                <a className="menu-item " href={`${linkUrl}`}>
                  <div
                    className="background-image"
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                    }}
                  />
                  <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default HomePage;
