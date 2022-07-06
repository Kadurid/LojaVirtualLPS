import * as config from "../data/config.json";

export function carrinhoMobileRule (){
  let x = 1;
  return x == 1;
}

export function carrinhoDesktopRule (){
  let x = 1;
  return x == 1;
}

export function alternativeFeatureRule(){
  let x = 1;
  if(x == 1){
    return "CarrinhoMobile";
  } else if(x == 2) {
    return "CarrinhoDesktop"
  } else {
    return null;
  }
}