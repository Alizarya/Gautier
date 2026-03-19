fetch("../assets/data/publications.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("publications-list");

    data.forEach((pub) => {
      const card = document.createElement("div");
      card.classList.add("publication-card");

      card.innerHTML = `
                <img src="${pub.image}" alt="${pub.title}">
                
                <div class="publication-content">
                    <h3>${pub.title}</h3>
                    <p>${pub.text || ""}</p>

                    <a href="${pub.pdf}" target="_blank" class="btn-primary">
                        Voir le PDF
                    </a>
                </div>
            `;

      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Erreur chargement publications:", error));
