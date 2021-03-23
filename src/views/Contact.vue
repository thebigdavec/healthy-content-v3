<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <h2>Get In Touch</h2>
    <a
      href="mailto:christina@healthycontent.co.uk?subject=Enquiry"
      target="_blank"
      class="button"
      >Send An EMail</a
    >
    <h3>Call on 07957 360 242</h3>
    <h4>Or find us at:</h4>
    <div class="links">
      <a href="mailto:c.neal@mac.com?subject=Enquiry" target="_blank"
        ><i class="fas fa-envelope-square"></i>
        <strong> Email c.neal@mac.com</strong></a
      >
      <a href="https://twitter.com/christinahcneal" target="_blank"
        ><i class="fab fa-twitter-square"></i><strong> Twitter</strong></a
      >
      <a href="https://www.facebook.com/healthycontent1/" target="_blank"
        ><i class="fab fa-facebook-square"></i><strong> Facebook</strong></a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  flex-grow: 1;
}
.button {
  display: inline-block;
  cursor: pointer;
  border: none;
  font-size: $fs-responsive-sm;
  font-weight: 700;
  background-color: $clr-accent-dark;
  color: white;
  text-transform: uppercase;
  letter-spacing: $lts-small;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px 2px #0001;
  &:hover {
    // opacity: 0.7;
    background-color: $clr-accent;
  }
}
.links {
  display: flex;
  flex-direction: column;
  a {
    font-size: smaller;
    margin: 0.5ch;
  }
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: center;
    a {
      margin: 1.5ch;
      margin-top: 0;
      font-size: initial;
    }
  }
}
</style>
