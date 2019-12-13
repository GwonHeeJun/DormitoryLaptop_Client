export const url = {
  dasom:
    process.env.NODE_ENV === "development"
      ? 'http://35.189.189.53:8080'
      : 'https://helper.dasomi.ai'
}

console.log(
  "this app is Service",
  `${process.env.NODE_ENV.substr(0,2)}-${url.dasom.substr(21,4)}`
)