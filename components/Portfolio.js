function PortfolioComponent(portfoliodata, callback) {
  const portfolioItems = portfoliodata
    .map(
      (item) => `
      <div class="portfolio-box">
        <img src="${item.imgSrc}" alt="" />
        <div class="portfolio-layer">
          <h4>${item.title}</h4>
          <a href="${item.link}" target="_blank"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
    `
    )
    .join("");

  return `
      <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Projects</span></h2>
        <div class="portfolio-container">
          ${portfolioItems}
        </div>
      </section>
    `;
  callback();
}

export default PortfolioComponent;
