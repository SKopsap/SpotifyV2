function NavLinks() {
  return /*html*/ `
  <nav class="px-4">
    <ul class="list-unstyled">
      <li>
        <a style="font-size: 0.9rem; color: lightgrey""  class="d-flex align-items-center m-0 p-0 fw-bold" href="/">
          <img width="25" src="../assets/home.svg" />
          <span class="m-3">Home<span>
        </a>
      </li>
      <li>
        <a style="font-size: 0.9rem; color: lightgrey" class="d-flex align-items-center m-0 p-0 fw-bold" href="#/search">
          <img width="25" src="../assets/search.svg" />
          <span class="m-3">Search<span>
        </a>
      </li>
      <li>
        <a style="font-size: 0.9rem; color: lightgrey"" class="d-flex align-items-center m-0 p-0 fw-bold" href="#/library">
          <img width="25" src="../assets/library.svg" />
          <span class="m-3">Library<span>
        </a>
      </li>
    </ul>
  </nav>
  `
}

export { NavLinks }
