let h1List = ["What is Covid?!", "A virus?", "A respiratory disease?"]
let pString = ["Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."]
new TypeIt("#h1InfoTyped", {
  strings: h1List,
  speed: 100,
}).go();
new TypeIt('#pInfoTyped', {
  strings: pString,
  speed: 30,
  lifeLike: true,
  startDelay: 7500,
}).go();
