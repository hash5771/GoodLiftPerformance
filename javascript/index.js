function changeGLPImageSize()
{
  window.addEventListener( "resize", (ev) => {
    const glpImage = document.querySelector("#img-override-glpimage");
    const navbarFlex = document.querySelector("#navbarNavAltMarkup");
    if (window.innerWidth < 1200)
    {
      glpImage.style.paddingRight = '10px';
    }
    else
    {
      glpImage.style.paddingRight = '20px';
    }
  })
}