function AboutComponent(aboutData, callback) {
  const { title, description, imageSrc, imageAlt } = aboutData;

  return `
      <section class="about" id="about">
        <div class="about-img">
          <img src="${imageSrc}" alt="${imageAlt}" />
        </div>
        <div class="about-content">
          <h2 class="heading">About <span>Me</span></h2>
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="#" class="btn">Read More</a>
        </div>
      </section>
    `;
  callback();
}

export default AboutComponent;
