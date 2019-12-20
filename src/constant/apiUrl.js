export const url = {
  gsm:
    process.env.NODE_ENV === "development"
      ? 'http://dormitory-management.us-east-2.elasticbeanstalk.com/'
      : 'http://dormitory-management.us-east-2.elasticbeanstalk.com/'
    }

console.log(
  "this app is Service",
  `${process.env.NODE_ENV.substr(0,2)}-${url.gsm.substr(21,4)}`
)