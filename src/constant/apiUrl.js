export const url = {
  dasom:
    process.env.NODE_ENV === "development"
      ? 'http://10.120.74.181:4000/'
      : 'https://helper.dasomi.ai'
}

console.log(
  "this app is Service",
  `${process.env.NODE_ENV.substr(0,2)}-${url.dasom.substr(21,4)}`
)