export const url = {
  dasom:
    process.env.NODE_ENV === "development"
      ? 'http://dormitory-management.us-east-2.elasticbeanstalk.com/'
      : 'http://10.120.74.181:4000/'
}

console.log(
  "this app is Service",
  `${process.env.NODE_ENV.substr(0,2)}-${url.dasom.substr(21,4)}`
)