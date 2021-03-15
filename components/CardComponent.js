const cssDefaults = {
  width: '200px',
  height: '290px'
}

function Card(title, name, cover_big, picture_big, css = cssDefaults) {
  return /*html*/ `
    <div style="max-width: ${css.width}; height: ${
    css.height
  }; background-color: #161616; position: relative; cursor: pointer; border-radius: 0.4rem;" class="d-flex flex-column m-1 card p-3 text-left">
     <img class="card-cover-image" style="max-width: 100%" src="${cover_big || picture_big}" alt="${title || name}" />
     <div class="mt-4">
      <h6 class="text-white truncate">${title || name}</h6>
      <p style="font-size: 0.8rem; font-weight: 500" class="text-white text-muted line-clamp">${title || name}</p>
     </div>
     <div style="position: absolute; right: 23px; bottom: 112px">
        <img style="border-radius: 50%; padding: 0.5rem; filter: invert()" width="37" class="btn-play" src="../assets/play.png" />
     </div>
    </div>
  `
}

export { Card }
