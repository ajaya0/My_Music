const artists = [
    {
      imgSrc: './src/imgs/star3.png',
      name: 'Badshah',
      shortD: 'Loremr sit, amet adipisicing elit.',
      longD: 'Aditya Prateek Singh Sisodia, (born 19 November 1985), known by his stage name Badshah,is an Indian rapper',
    },
    {
      imgSrc: './src/imgs/star6.png',
      name: 'Kumar Sanu',
      shortD: 'Lorem ipsum dolor sit, adipisicing elit.',
      longD: 'Kedarnath Bhattacharya (born 20 October 1957), professionally known as Kumar Sanu, is an Indian playback singer. He is known as the King of Melody in Bollywood.',
    },
    {
      imgSrc: './src/imgs/star4.png',
      name: 'Mc Stan',
      shortD: 'Lorem ipsum dolor sit, amet consectetur.',
      longD: 'MC Stan is a well-known Indian rapper, singer, composer, and writer who is most recognised for his incredible rap music.',
    },
    {
      imgSrc: './src/imgs/star5.png',
      name: 'King',
      shortD: 'Lorem ipsum adipisicing elit.',
      longD: 'King is an Indian rapper, songwriter, and singer. He was among the Top 5 contestants in the MTV reality TV show MTV Hustle (2019).',
    },
    {
      imgSrc: './src/imgs/star2.png',
      name: 'Arijit Singh',
      shortD: 'Lorem ipsum dolor sit, amet conisicing elit.',
      longD: 'Arijit Singh Sir has made Indian music famous all over the world with the magic of his extraordinary voice. Which will be remembered forever.',
    },
    {
      imgSrc: './src/imgs/star7.jpeg',
      name: 'Neha Kakkar',
      shortD: 'Lorem ipsum dolor adipisicing elit.',
      longD: 'Neha Kakkar, born on June 6, 1988, is a well-known Indian playback singer, television star, and artist who has sung several popular Bollywood, Punjabi, and Bengali songs. The vocalist began singing at the age of four and made her way up to an audition for “Indian Idol.”',
    },
  ];
  
  const artistSection = document.querySelector('.artists-section');
  const tempList = document.createElement('ul');
  tempList.classList.add('cards-2-container');
  artistSection.innerHTML += '<h2 class="heading-2 dark-theme">Indian Stars</h2>';
  artists.forEach((artist, index) => {
    tempList.innerHTML += `
    <li class="card-2 card-2-1 ${index > 1 ? 'display-none' : ''}">
    <ul class="card-2-small-container ">
      <li class="card-2-img-container">
        <img
          src="${artist.imgSrc}"
          alt="${artist.name}"
          class="star-img"
        />
      </li>
      <li class="card-2-intro-container">
        <h3 class="card-2-heading heading-3 dark-theme">
        ${artist.name}
        </h3>

        

        <p class="card-2-info para-3 dark-theme">
        ${artist.longD}
        </p>
      </li>
    </ul>
  </li>`;
  });
  tempList.innerHTML += '<button class="show-more dt-display-none">SHOW MORE &#160; <i class="main-theme fa fa-angle-down"></i></button>';
  artistSection.appendChild(tempList);
  
  const showDetailsBtn = document.querySelector('.show-more');
  const cards = document.querySelectorAll('.card-2');
  function artistListAdd() {
    if (cards[2].classList.contains('display-none')) {
      cards.forEach((e, index) => {
        if (index > 1) {
          e.classList.remove('display-none');
        }
      });
      showDetailsBtn.innerHTML = 'SHOW LESS &#160; <i class=\'fa fa-angle-up\'></i>';
    } else {
      cards.forEach((e, index) => {
        if (index > 1) {
          e.classList.add('display-none');
          showDetailsBtn.innerHTML = 'SHOW MORE &#160; <i class=\'fa fa-angle-down\'></i>';
        }
      });
    }
  }
  
  showDetailsBtn.addEventListener('click', artistListAdd);


  // line no 60
  // <p class="card-2-sub-heading para-2 main-theme">
  // ${artist.shortD}
  // </p>
  