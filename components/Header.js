function HeaderComponent(headerData, callback) {
  const { title, link1, link2, link3, link4 } = headerData;

  return `
    <header id="header">
      <a href="#" class="logo">${title}</a>
      <i class="bx bx-menu-alt-right" id="menu-icon"></i>
      <div class="navbar">
          <a href="#home" class="active">${link1}</a>
          <a href="#about">${link2}</a>
          <a href="#portfolio">${link3}</a>
          <a href="#contact">${link4}</a>
      </div>
    </header>
    
        `;
  callback();
}

export default HeaderComponent;
