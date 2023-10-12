function ContactComponent() {
  return `    <section class="contact" id="contact">
  <h2 class="heading">Contact <span>Me!</span></h2>
  <form action="#">
    <div class="input-box">
      <input type="text" name="name" id="name" placeholder="Full Name" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
      />
    </div>
    <div class="input-box">
      <input
        type="tel"
        name="number"
        id="number"
        placeholder="Mobile Number"
      />
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Email Subject"
      />
    </div>
    <textarea
      name="textarea"
      id="textarea"
      cols="30"
      rows="10"
      placeholder="Your Message..."
    ></textarea>
    <input type="submit" value="Send Message" class="btn" />
  </form>
</section>`;
}

export default ContactComponent;
