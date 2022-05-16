function navigation(page_show, page1_hide, page2_hide, page3_hide) {
  page_show.classList.remove("displayOff");
  page1_hide.classList.add("displayOff");
  page2_hide.classList.add("displayOff");
  page3_hide.classList.add("displayOff");
}
function headLine(element, value) {
  element.innerHTML = value;
}

export { navigation, headLine };
