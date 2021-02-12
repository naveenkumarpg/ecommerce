import React from "react";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          linkUrl: "hats",
        },
        {
          title: "jackets",
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          linkUrl: "womens",
        },
        {
          title: "mens",
          linkUrl: "mens",
        },
        {
          title: "kids",
          linkUrl: "kids",
        },
      ],
    };
  }

  render() {
    return (
      <section className="container home-page">
        <div className="row">
          {this.state.sections.map((item, idx) => {
            const { title, linkUrl } = item;
            return (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-4">
                <a className="menu-item " href={`${linkUrl}`}>
                  <img
                    className="background-image"
                    src="https://dummyimage.com/400x400/333333/333.jpg"
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
