export function navbarMobileRule (){
  return window.innerHeight <= 800
}

export function navbarDesktopRule (){
  return window.innerHeight > 800
}

export function alternativeFeatureRule(){
  //
  let x = 2;
  if(x === 1){
    return "NavbarMobile";
  } else if(x === 2) {
    return "NavbarDesktop"
  } else {
    return null;
  }
}