<template>
  <div class="services container">
    <h1>What We Can Do For You</h1>
    <div class="flex">
      <div>
        <h2>What makes great content?</h2>
        <p>
          Passion, knowledge and experience. We know this, which is why we only
          cover topics we truly love, and we’re passionate about the health &
          fitness and healthcare sectors. Our highly-experienced team of writers
          and designers have years of experience creating content for magazines,
          brochures and websites on health, wellbeing and elderly care. We know
          that relevant, empathetic and engaging content is vital for helping
          you build your brand and convey your message. We offer the following
          services:
        </p>
        <ul>
          <li v-for="(item, index) in servicesA" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div>
        <h2>Publishing Services</h2>
        <p>
          Creation (from initial concept to oven-ready PDF files) for the
          following:
        </p>
        <ol>
          <li v-for="(item, index) in servicesB" :key="index">{{ item }}</li>
        </ol>
      </div>
    </div>
    <h2>Our Clients</h2>
    <ul class="client-list">
      <ClientItem v-for="client in clients" :key="client.id" :client="client" />
    </ul>
  </div>
</template>
<script>
import ClientItem from "@/components/clients/ClientItem";
export default {
  components: {
    ClientItem,
  },
  data() {
    return {
      servicesA: [
        "Copywriting for websites, publications, advertorials and brochures",
        "Company Blogs",
        "Ghostwriting editorial pieces",
        "Corporate and brochure photography",
        "Social media management",
        "Video production",
        "PR and media training",
      ],
      servicesB: [
        "Brochures",
        "Contract magazines",
        "Monthly e-newsletters",
        "Book, magazines, catalogues",
      ],
      clients: [
        {
          id: "001",
          name: "05creative",
          logoPath: "./images/clients/05Creative.jpg",
        },
        {
          id: "002",
          name: "Alzheimer's Show",
          logoPath: "./images/clients/alzheimers-show.png",
        },
        {
          id: "003",
          name: "Cadogan Clinic",
          logoPath: "./images/clients/cadogan-clinic.png",
        },
        {
          id: "004",
          name: "Dennis",
          logoPath: "./images/clients/dennis.png",
        },
        {
          id: "005",
          name: "Harley Street Vein Clinic",
          logoPath: "./images/clients/harley-street-vein-clinic.png",
        },
        {
          id: "006",
          name: "MB Associates",
          logoPath: "./images/clients/mb-associates.png",
        },
        {
          id: "007",
          name: "Ronhill",
          logoPath: "./images/clients/ronhill.png",
        },
        {
          id: "008",
          name: "Runner's Need",
          logoPath: "./images/clients/runners-need.jpg",
        },
        {
          id: "009",
          name: "Women's Running",
          logoPath: "./images/clients/womens-running.png",
        },
        {
          id: "010",
          name: "Bellum",
          logoPath: "./images/clients/bellum.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.services {
  flex-grow: 1;
}
.flex {
  text-align: left;
  align-items: flex-start;
  flex-wrap: wrap;
}
.client-list {
  list-style: none;
  padding: 0;
  max-width: 75%;
  margin: 0 auto 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  li {
    margin: 1ch;
    flex-basis: 75%;
    width: 100%;
    max-height: 100%;
    @media (min-width: 1080px) {
      flex-basis: 23%;
    }
  }
}
</style>