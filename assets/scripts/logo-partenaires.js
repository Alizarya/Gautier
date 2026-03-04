const container = document.querySelector(".partner-logos");

fetch("assets/data/partenaires.json")
  .then((response) => response.json())
  .then((partenaires) => {
    const logos = [...partenaires, ...partenaires];

    logos.forEach((part) => {
      const box = document.createElement("div");
      box.classList.add("logo-box");

      const a = document.createElement("a");
      a.href = part.url;
      a.target = "_blank";

      const img = document.createElement("img");
      img.src = part.logo;
      img.alt = part.alt;

      a.appendChild(img);
      box.appendChild(a);
      container.appendChild(box);
    });
  })
  .catch((err) =>
    console.error("Erreur lors du chargement des partenaires :", err),
  );
