<template>
  <body>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src="https://aegyo.id/logo_aegyo_full.png" height="50px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a class="btn btn-primary ms-4" href="/live">live <i class="bx bx-play-circle"></i></a>
            <div class="navbar-nav ms-auto">
              <a class="nav-link ms-5" href="/kpop">K-POP</a>
              <a class="nav-link" href="/kdrama">K-DRAMA</a>
              <a class="nav-link" href="/kbeauty">K-BEAUTY</a>
              <a class="nav-link" href="/entertaiment">ENTERTAIMENT</a>
              <a class="nav-link" href="/lifestyle">LIFESTYLE</a>
              <a class="nav-link" href="/movies">MOVIES</a>
              <a class="nav-link" href="/gallery">GALLERY</a>
              <a class="nav-link" href="/quiz">QUIZ</a>
            </div>
            <form class="d-flex ms-3">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Created with <i class="bi bi-suit-heart-fill text-danger"></i> by <a href="https://www.instagram.com/bianda880/" class="text-white fw-bold">Bianda</a></p>
    </div>
  </body>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./assets/style.css";
</style>
