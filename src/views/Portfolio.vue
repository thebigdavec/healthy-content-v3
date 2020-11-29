<template>
  <div class="portfolio container">
    <h1>Examples Of Our Work</h1>
    <h2>Click the logos for more details</h2>
    <ul class="portfolio-list">
      <PortfolioItem
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :portfolio="portfolio"
      />
    </ul>
  </div>
</template>
<script>
import PortfolioItem from "@/components/portfolio/PortfolioItem";
export default {
  components: {
    PortfolioItem,
  },
  data() {
    return {
      portfolios: [
        {
          id: "001",
          name: "Ronhill",
          logoPath: "./images/clients/ronhill.png",
          imagePath: "./images/clients/modals/ronhill.jpg",
          description:
            "This leading running brand wanted to create an online social media campaign called #RunEveryDay to raise its profile and encourage people of all abilities to start running. Healthy Content was asked to supply relevant content, including tips for beginners, how to get fitter, training plans and inspirational blogs.",
        },
        {
          id: "002",
          name: "The Alzheimer's Show",
          logoPath: "./images/clients/alzheimers-show.png",
          imagePath: "./images/clients/modals/alzheimers-show.jpg",
          description:
            "The show organisers wanted to generate more traffic to its website and build a regular audience, so Healthy Content was commissioned to provide a series of blogs and articles on living with dementia. We also produced a series of digital guides on how to be a better carer to send out to family carers, enabling the organisation to grow its database.",
        },
        {
          id: "003",
          name: "Bellum",
          logoPath: "./images/clients/bellum.png",
          imagePath: "./images/clients/modals/bellum.jpg",
          description:
            "This fast-growing fitness brand wanted to raise its profile with a series of banners and catalogue showcasing its clothing range to consumers and trade buyers at a health show. Healthy Content created the content and design and managed the brochure print, sourcing a suitable printer, obtaining print costs and managing the entire print process.",
        },
        {
          id: "004",
          name: "Dennis Publishing",
          logoPath: "./images/clients/dennis-backup.png",
          imagePath: "./images/clients/modals/dennis.jpg",
          description:
            "This busy publisher wanted to produce a series of fitness books aimed at women keen to get in shape. The Healthy Content team created three 148 page books, covering every aspect of the editorial process, including generating the editorial concept and content for each book and commissioning and writing the copy, as well as design and production. The portfolio received print-ready PDF files, on time and on budget.",
        },
        {
          id: "005",
          name: "Wild Bunch Media",
          logoPath: "./images/clients/womens-running.png",
          imagePath: "./images/clients/modals/womens-running.jpg",
          description:
            "The award-winning publishers of Women's and Men's Running magazines wanted to create a series of bookazines for runners training for spring marathons. Healthy Content Director Christina Macdonald commissioned, edited and oversaw the design of four marathon books, liaising with writers, designers and photo libraries. The books were sold in retail outlets and online.",
        },
        {
          id: "006",
          name: "Harley Street Vein Clinic",
          logoPath: "./images/clients/harley-street-vein-clinic.png",
          imagePath: "./images/clients/modals/harley-street-vein-clinic.jpg",
          description:
            "This leading running brand wanted to create an online social media campaign called #RunEveryDay to raise its profile and encourage people of all abilities to start running. Healthy Content was asked to supply relevant content, including tips for beginners, how to get fitter, training plans and inspirational blogs.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  flex-grow: 1;
}
.portfolio-list {
  list-style: none;
  padding: 0;
  max-width: 75%;
  margin: 0 auto 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>