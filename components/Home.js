function HomeComponent(homeData, callback) {
  const { title1, title2, title3, imageSrc, imageAlt } = homeData;

  return `
    <section class="home" id="home">
      <div class="home-content">
        <h3>${title1}</h3>
        <h1>${title2}</h1>
        <h3>${title3} <span class="multiple-text"></span></h3>
        <div class="social-media">
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-instagram"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
        </div>
        <a href="#" class="btn">Download CV</a>
      </div>
      <div class="home-img">
        <img src="${imageSrc}" alt="${imageAlt}" />
      </div>
    </section>
      `;
  callback();
}

export default HomeComponent;
