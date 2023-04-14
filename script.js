window.addEventListener("DOMContentLoaded", (event) => {
  const pText = document.createElement("p");
  pText.textContent = "Nathan John Feuerstein (Gladwin, Míchigan; 30 de marzo de 1991), más conocido como NF (estilizado como ИF) es un rapero, cantante y compositor estadounidense. Lanzó un EP titulado NF en 2014, con Capitol CMG, que le permitió ingresar en las listas de Billboard. Ha lanzado cinco álbumes de estudio: Mansion en 2015, Therapy Session en 2016, Perception en 2017, el cual debutó N°1 en los Billboard 200 Charts, The Search en 2019, y CLOUDS (THE MIXTAPE) en 2021. El tercer sencillo de Perception, Let You Down, le permitió entrar en los tabloides internacionales y certificarse triple platino en Estados Unidos. Su música está enfocada en su crecimiento como rapero y superación personal.";
  const parentDiv = document.getElementsByClassName("authorBiography");
  parentDiv[0].appendChild(pText);

  const fichaTecnica = {
    nombre: "Nathan John Feuerstein",
    edad: "30 de marzo de 1991 (32 años)",
    nacimiento: "Gladwin, Míchigan, Estados Unidos",
    esposa: "Bridgette Doremus (matr. 2018)",
    ocupacion: "Ocupación Rapero, cantante, compositor",
    web: "www.nfrealmusic.com",
  };

  const parentNode = document.getElementsByClassName("authorContainerExtraInfo")[0];
  const ul = document.createElement("ul");

  Object.entries(fichaTecnica).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${key} ${value}`;
    return ul.appendChild(li);
  });

  document.getElementsByTagName("label")[0].onclick = () => alert("Autor: Melissa Martínez");
  document.getElementsByTagName("button")[0].addEventListener("click", () => parentNode.appendChild(ul));
});