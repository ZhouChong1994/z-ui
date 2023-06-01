// 获取字符串宽高
export function getCharSizeByCanvas(char, style = {}) {
  const canvas = document.createElement("canvas");
  canvas.style.positon = "ablsolute";
  const ctx = canvas.getContext("2d");
  const { fontSize = 14, fontFamily = "Arial" } = style;
  document.body.appendChild(canvas);
  ctx.font = `${fontSize}px ${fontFamily}`;
  document.body.removeChild(canvas);
  const text = ctx.measureText(char); // TextMetrics object
  ctx.fillText(char, 50, 50);
  return {
    height: fontSize,
    width: text.width,
  };
}
