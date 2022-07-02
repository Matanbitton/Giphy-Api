const img = document.querySelector(".photo");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=RlVpt5UzWDx7S8eL8LZgPtRWXDGkxW8O&s=dogs",
  { mode: "cors" }
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    img.setAttribute("src", "res.data.images.original.url");
  });
