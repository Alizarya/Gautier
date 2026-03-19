document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("mission-modal");
  var modalTitle = document.getElementById("modal-title");
  var modalText = document.getElementById("modal-text");
  var modalImage = document.getElementById("modal-image");

  var closeBtn = document.querySelector(".modal-close");
  var overlay = document.querySelector(".modal-overlay");
  var missions = document.querySelectorAll(".mission");

  var missionsData = [
    {
      title: "Formations",
      text: "En inter (via la FNCCR) ou en intra, je conçois des formations adaptées à votre organisation et à vos enjeux.\n\nObjectif : permettre aux équipes de s’approprier collectivement les transformations du système énergétique et de repérer les collaborations à renforcer entre métiers.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
    },
    {
      title: "Stratégies d’approvisionnement énergétique territoriale",
      text: "J’accompagne les collectivités dans la construction de nouvelles stratégies d’approvisionnement, non seulement pour répondre à un besoin opérationnel décrit dans le cadre de vos marchés publics, mais aussi pour faire émerger une vision de service public local de l’énergie.\n\nSelon vos enjeux, je peux intervenir avec différents partenaires (techniques, juridiques, mobilisation des acteurs) pour mettre en place une PMO mutualisé, réaliser un PCAET/SDE, structurer une feuille de route et un plan d’action.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
    },
    {
      title: "Cadre de transition",
      text: "Parce qu’un rapport externe ne suffit pas à passer à l’action, j’interviens de manière intégrée au sein de vos équipes pour accélérer la mise en œuvre, consolider vos projets et accompagner une phase de transition structurante de vos services.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
    },
    {
      title: "Missions d’expertises",
      text: "Je mobilise mes compétences pour analyser les évolutions du système énergétique (production, consommation, réseau, stockage, fourniture), construire des positions argumentées et renforcer le rôle des instances démocratiques locales.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
    },
    {
      title: "Projet de R&D",
      text: "Je construis des partenariats avec des acteurs de la recherche afin de produire des connaissances ancrées dans les réalités de terrain et de faciliter le transfert de ces innovations vers les collectivités.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
    },
  ];

  function openModal(index) {
    var data = missionsData[index];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    modalImage.src = data.image;

    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  for (var i = 0; i < missions.length; i++) {
    (function (index) {
      missions[index].addEventListener("click", function () {
        openModal(index);
      });
    })(i);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
