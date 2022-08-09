export default function SmoothScrollTo(containerByID) {
  const node = document.getElementById(containerByID);
  const navbarHeight = 102;

  window.scrollTo({
    top: node.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}
