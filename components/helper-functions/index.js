export function createStyleTag() {
  let styleTag = document.head.appendChild(document.createElement("style"));
  let attr = document.createAttribute("type");
  attr.value = "text/css";
  styleTag.setAttributeNode(attr);
  return styleTag;
}
export function addRulesToStyleTag(styleTag, node) {
   styleTag.appendChild(document.createTextNode(node));
}
