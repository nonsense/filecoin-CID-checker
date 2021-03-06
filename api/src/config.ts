const envVarNames = ['PORT', 'CID_DB_CONNECTIONSTRING', 'CID_DB_NAME']
envVarNames.forEach((n) => {
  if (process.env[n] === undefined) {
    throw Error(`${n} not specified in env config`)
  }
})

export const port = process.env.PORT as string
export const DB_CONNECTIONSTRING = process.env.CID_DB_CONNECTIONSTRING as string
export const DB_NAME = process.env.CID_DB_NAME as string
