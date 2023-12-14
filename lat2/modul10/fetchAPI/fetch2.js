function fetchAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const cardsContainer = document.querySelector(".cardsContainer");
        cardsContainer.innerHTML = ""; // Clear existing content
  
        data.forEach((element) => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          const title = document.createElement("h2");
          title.textContent = element.title;
  
          const userId = document.createElement("p");
          userId.textContent = `User ID: ${element.userId}`;
  
          const id = document.createElement("p");
          id.textContent = `ID: ${element.id}`;
  
          const completed = document.createElement("p");
          completed.textContent = `Completed: ${element.completed}`;
  
          card.appendChild(title);
          card.appendChild(userId);
          card.appendChild(id);
          card.appendChild(completed);
  
          cardsContainer.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }