export default function getUrlQuery(url) {
  url = url ? url : location.href;
  let params = {},
      arr = url.split("?");
  if (arr.length <= 1) return params;
  arr = arr[1].split("&");
  for (let i = 0, l = arr.length; i < l; i++) {
    let a = arr[i].split("=");
    params[a[0]] = a[1];
  }
  return params;
}