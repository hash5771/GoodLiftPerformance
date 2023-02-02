function changeGLPimage()
{
  const glpImage = document.querySelector("#img-override-glpimage")
  if (window.innerWidth < 1200)
  {
    glpImage.style.paddingRight = '100px';
  }
  else
  {
    glpImage.style.paddingRight = '20px';
  }
}