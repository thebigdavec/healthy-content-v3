<template>
  <div class="about container">
    <h1>Meet The Team</h1>
    <ul>
      <TeamItem v-for="member in staff" :key="member.id" :member="member" />
    </ul>
  </div>
</template>
<script>
import TeamItem from "../components/team/TeamItem";
export default {
  components: {
    TeamItem,
  },
  data() {
    return {
      staff: [
        {
          id: "001",
          photoPath: "./images/team/christina-neal.jpg",
          name: "Christina Neal",
          position: "Managing Director",
          biog: [
            "Christina is an award-winning writer and editor with over 25 years’ experience in media. She worked for Dennis Publishing for 10 years as Editor and Publisher of the company’s specialist magazine division, where she managed editorial and advertising teams and magazine budgets, overseeing and managing new launches.",
            "Christina is known for independently launching Women’s Fitness magazine, before selling the title to a major publisher. In 2009, Christina was head-hunted to launch the flagship title, Women’s Running, which she edited for over five years. During her time at the helm, the magazine won three major PPA industry awards.",
          ],
        },
        {
          id: "002",
          photoPath: "./images/team/pio-blanco.jpg",
          name: "Pio Blanco",
          position: "Art Director",
          biog: [
            "Pio is a highly experienced art director and designer, and has worked for a vast range of magazines and agencies, creating logos, stylish layouts and innovative design. He has worked for a variety of major publishing companies, including Condé Nast, Dennis Publishing and Time Inc, producing layouts for a vast range of titles including Sainsbury’s Magazine, Delicious and Men’s Health.",
          ],
        },
        {
          id: "003",
          photoPath: "./images/team/claire-chamberlain.jpg",
          name: "Claire Chamberlain",
          position: "Sub-Editor & Copywriter",
          biog: [
            "Claire has worked across a range of consumer and trade titles and has vast experience of creating commercial content for e-newsletters and websites. She is the former Deputy Editor of Women’s Running and previously worked as freelance Sub-Editor for Good Homes, Best, Company, Cosmopolitan, Eve, Glamour and Harper’s Bazaar. She is widely respected for her ability to write striking, attention-grabbing headlines.",
          ],
        },
        {
          id: "004",
          photoPath: "./images/team/dave-collison.jpg",
          name: "Dave Collison",
          position: "Website Manager & Videographer",
          biog: [
            "Dave is a former computer operator who manages all technical aspects of the business, including website design and creation, video editing and generation of animated GIFS, as well as being our resident videographer. He has a keen eye for design and a talent for solving any technical issues, which makes him our go-to computer expert. He also has the uncanny ability to sing like Roy Orbison. We're not kidding.",
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.about {
  flex-grow: 1;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  justify-content: center;
}
</style>