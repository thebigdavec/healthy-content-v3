<template>
  <div class="testimonials">
    <h1>What Our Clients Are Saying</h1>
    <ul class="testimonials">
      <TestimonailItem
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        :testimonial="testimonial"
      />
    </ul>
  </div>
</template>
<script>
import TestimonailItem from "@/components/testimonials/TestimonialItem";
export default {
  components: {
    TestimonailItem,
  },
  data() {
    return {
      testimonials: [
        {
          id: "001",
          name: "Sarah James",
          position: "Director",
          client: "05Creative",
          message:
            "We love working with Christina – she has crafted excellent copy for our clients and really goes the extra mile to ensure she understands the background and job at hand. We thoroughly recommend Healthy Content to anyone needing polished, professional and appropriate words for any medium!",
        },
        {
          id: "002",
          name: "Sara Couchman",
          position: "Marketing Director & Co-Founder",
          client: "The Alzheimer's Show",
          message:
            "Christina is always keen to offer ideas on how we can engage with and grow our audience. She is attentive and can work well under pressure, with great attention to detail. Healthy Content has made a valuable contribution to how our brand and business connects with our audiences.",
        },
        {
          id: "003",
          name: "James Cook",
          position: "Managing Director",
          client: "Innovative Aged Care",
          message:
            "Christina and her team have an excellent knowledge of the elderly care sector and understands how to address our target audience in an appropriate and empathetic manner, enabling us to convey our key messages to customers and reach a wider audience.",
        },
        {
          id: "004",
          name: "Jeff Archer",
          position: "Director",
          client: "The Tonic Corporate Wellbeing",
          message:
            "Healthy Content always provides content that is consistent with each brief and always manages to weave in some form of added value or insight. I’d heartily recommend tapping into its extensive knowledge to communicate clearly and get your message across.",
        },
        {
          id: "005",
          name: "Oliver Carter",
          position: "Marketing Manager",
          client: "Ronhill & Hilly",
          message:
            "Christina and her team work diligently to deadlines and creatively think around the brief to add greater value. Add in Christina’s own experience and knowledge of health and fitness, and the mix allows great content to shine.",
        },
        {
          id: "006",
          name: "Nick Troop",
          position: "Managing Director",
          client: "Wild Bunch Media Ltd",
          message:
            "Christina is a skilled and dedicated writer and editor, and approaches each project with genuine passion. She is reliable, creative and always highly professional.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.testimonials {
  flex-grow: 1;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    margin: 0 auto 2rem;
    z-index: -1;
    @media (min-width: 1080px) {
      max-width: 80%;
    }
  }
}
</style>