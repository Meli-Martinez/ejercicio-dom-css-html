window.addEventListener("DOMContentLoaded", (event) => {
  const pBio = document.createElement("p").textContent = "Nathan John Feuerstein (Gladwin, Míchigan; 30 de marzo de 1991), más conocido como NF (estilizado como ИF) es un rapero, cantante y compositor estadounidense. Lanzó un EP titulado NF en 2014, con Capitol CMG, que le permitió ingresar en las listas de Billboard. Ha lanzado cinco álbumes de estudio: Mansion en 2015, Therapy Session en 2016, Perception en 2017, el cual debutó N°1 en los Billboard 200 Charts, The Search en 2019, y CLOUDS (THE MIXTAPE) en 2021. El tercer sencillo de Perception, Let You Down, le permitió entrar en los tabloides internacionales y certificarse triple platino en Estados Unidos. Su música está enfocada en su crecimiento como rapero y superación personal.";
  const father = document.getElementsByClassName("authorBiography");
  father.appendChild(pBio);
  
  const handleAlert = () => alert("Autor: Melissa Martínez");
  document.getElementsByTagName("label").onclick = handleAlert();

  const infoList = [];
  const showInfoList = () => infoList;
  document.getElementsByTagName("button").onclick = showInfoList();
});