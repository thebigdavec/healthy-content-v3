<template>
  <main class="home">
    <h1>Presenting Your Vision</h1>
    <article>
      <section>
        <h2>Words are our language</h2>
        <p>
          Healthy Content was formed in November 2014 by award-winning health
          editor Christina Neal, former Editor of Good Health and Women’s
          Fitness and Editor-in-Chief of Women’s Running. Christina immediately
          secured contracts to produce health and fitness guides for Dennis
          Publishing and wrote two books, Run Yourself Fit and Dementia Care: A
          Guide. Our existing clients include running and fitness brands
          Ronhill, Hilly, Rebound UK and Bellum Active, and our healthcare
          clients include Cadogan Clinic, Chelsea Court Place and Harley Street
          Vein Clinic.
        </p>
        <p>
          We understand how important it is to get your message across in the
          right way, which is why we’re so passionate about language, tone and
          style. Our job is to find the right words for your business… on time,
          on point and on budget. Whether you simply need copywriting for
          brochures, marketing campaigns or websites, or you require full
          creation and design of brochures, magazines or leaflets, our expert
          team of copywriters, designers and photographers can help. We can also
          help with social media management and video content. Please get in
          touch to discuss how we can help you raise your profile.
        </p>
      </section>
      <section>
        <h2>Some of our titles</h2>
        <TheBooks />
      </section>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
import TheBooks from "../components/TheBooks";
export default {
  name: "Home",
  components: {
    TheBooks,
  },
};
</script>
<style scoped>
.home {
  align-self: center;
}
h2 {
  text-align: center;
  border-bottom: 1px solid grey;
}
article {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
article section {
  box-shadow: 0 10px 10px -10px #0002 inset;
  width: fit-content;
  flex-basis: 48%;
  padding: 2rem 0;
}

@media (min-width: 1080px) {
  article {
    flex-direction: row;
    text-align: initial;
  }
  article section {
    box-shadow: none;
  }
}
</style>
