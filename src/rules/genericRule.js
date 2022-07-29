export default function genericRule(list){
  console.log(window.innerWidth);
  if(window.innerWidth < 1000){
    return list.filter(value => value.component.includes("Mobile"));
  } else {
    return list.filter(value => value.component.includes("Desktop"));
  }
}