<template>
  <div class="books">
    <a href="#" target="_blank" class="book book1"
      ><img src="../assets/images/books/dementia-care.jpg"
    /></a>
    <a href="#" target="_blank" class="book book2"
      ><img src="../assets/images/books/run-yourself-fit.jpg"
    /></a>
    <a href="#" target="_blank" class="book book3"
      ><img src="../assets/images/books/womens-running-65.png"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.books {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}
.book {
  display: block;
  flex-basis: 33%;
  transition: 250ms ease;
}
.book + .book {
  margin: 0 0 0 0.5rem;
}
.book img {
  max-width: 100%;
}
@media (min-width: 1080px) {
  .books {
    flex-direction: row;
  }
  .book + .book {
    margin: 0 0 0 1rem;
  }
  .book:hover {
    flex-basis: 100%;
  }
}
</style>