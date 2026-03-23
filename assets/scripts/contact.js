const API_URL = "https://api.g-esplen.fr/contact";

const form = document.querySelector(".contact-form");
const submitBtn = form.querySelector("button[type='submit']");
const btnText = submitBtn.querySelector(".btn-text");
const statusMessage = form.querySelector(".form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🔒 Désactivation + état loading
  submitBtn.disabled = true;
  submitBtn.setAttribute("aria-busy", "true");
  btnText.textContent = "Envoi en cours...";

  statusMessage.textContent = "";
  statusMessage.className = "form-status";

  const formData = {
    name: form.name.value,
    company: form.company.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Erreur serveur");
    }

    const data = await response.json();

    // ✅ Succès
    btnText.textContent = "Message envoyé ✓";
    submitBtn.setAttribute("aria-busy", "false");

    statusMessage.textContent =
      data.message || "Votre message a bien été envoyé.";
    statusMessage.classList.add("success");

    form.reset();

    // Focus sur le message (accessibilité)
    statusMessage.setAttribute("tabindex", "-1");
    statusMessage.focus();

    // Réactivation après délai
    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = "Envoyer";
    }, 4000);
  } catch (error) {
    console.error(error);

    // ❌ Erreur
    submitBtn.disabled = false;
    submitBtn.setAttribute("aria-busy", "false");
    btnText.textContent = "Envoyer";

    statusMessage.textContent =
      "Une erreur est survenue. Merci de réessayer ultérieurement ou d'utiliser une autre méthode.";
    statusMessage.classList.add("error");

    statusMessage.setAttribute("tabindex", "-1");
    statusMessage.focus();
  }
});
