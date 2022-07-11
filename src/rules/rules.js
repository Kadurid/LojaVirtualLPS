export function navbarMobileRule (){
  let x = 1;
  return x == 1;
}

export function navbarDesktopRule (){
  let x = 1;
  return x == 1;
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