/**
 * @description 常用浏览器脚本
 */

/**
 * @description 加载 <script/>
 * @param src 需要加载的链接
 */
function loadScript(src: string, loadCallBack = () => {}): void {
  const scriptElement = document.createElement("script");
  scriptElement.src = src;
  scriptElement.onload = loadCallBack;
  document.body.appendChild(scriptElement);
}

/**
 * @description 加载 jQuery
 */
function jQueryLoad() {
  loadScript("https://code.jquery.com/jquery-3.3.1.min.js");
}

/**
 * @description 加载 lodash
 */
function lodashLoad() {
  loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js");
}
