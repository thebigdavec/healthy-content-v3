<template>
  <div class="books">
    <a
      href="https://www.amazon.co.uk/Dementia-Care-Guide-Sheldon-Guides/dp/184709399X/ref=sr_1_3"
      target="_blank"
      class="book book1"
      rel="noreferrer"
      ><img
        src="../assets/images/books/dementia-care.jpg"
        alt="Dementia Care - A Guide Book Cover"
    /></a>
    <a
      href="https://www.amazon.co.uk/Run-Yourself-Fit-Simple-Healthier/dp/1849537992/ref=sr_1_1"
      target="_blank"
      class="book book2"
      rel="noreferrer"
      ><img
        src="../assets/images/books/run-yourself-fit.jpg"
        alt="Run Yourself Fit Book Cover"
    /></a>
    <div class="book book3">
      <img
        src="../assets/images/books/womens-running-65.png"
        alt="Women's Running Magazine"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.books {
  display: flex;
  justify-content: center;
  align-items: center;
}
.book {
  flex-basis: 33%;
  transition: 250ms ease;
  box-shadow: 0 10px 30px -20px #0002;
}
.book + .book {
  margin: 0 0 0 0.5rem;
}
.book img {
  display: block;
  max-width: 100%;
}
a.book {
  transition: transform 250ms ease;
}
a.book:hover {
  transform: scale(1.1);
}
@media (min-width: 1080px) {
  .books {
    flex-direction: row;
  }
  .book + .book {
    margin: 0 0 0 1rem;
  }
}
</style>
