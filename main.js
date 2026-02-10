const explore_input = document.getElementById('explore_input');
const fav_input = document.getElementById('fav_input');
const imgfav_input = document.getElementById('imgfav_input');
const home_input = document.getElementById('home_input');

function home_press() {
    document.location = 'index.html'
}

function explore_press() {
    document.location = 'explore.html'
}

function fav_press() {
    document.location = 'favorites.html'
}

function imgfav_press() {
    document.location = 'images/favorites'
}

const gallery = document.getElementById('gallery');

const folder = 'images/favs/';
const prefix = '';
const maxImages = 500;

// Supported extensions
const extensions = ['.jpg', '.png', '.webp', '.gif'];

// Clear gallery
gallery.innerHTML = '';

// Make the gallery responsive
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'center';
gallery.style.gap = '10px';

for (let i = 1; i <= maxImages; i++) {
  let found = false;

  for (const ext of extensions) {;
    const link = document.createElement("a");
    link.href = `${folder}${prefix}${i}${ext}`;
    const img = new Image();
    img.src = `${folder}${prefix}${i}${ext}`;
    img.alt = `${prefix}${i}`;

    img.onload = () => {
      if (!found) {
        img.style.flex = '1 1 200px';
        img.style.maxWidth = 'calc(100% - 20px)';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.objectFit = 'cover';
        link.appendChild(img);
        gallery.appendChild(link);
        found = true;
      }
    }

    img.onerror = () => {
      //console.log(`${folder}${prefix}${i}${ext} not found.`); // optional
    }
  }
}

