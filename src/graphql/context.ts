import { db, Db } from './db'

export interface Context {
  db: Db
}

export const context: Context = {
  db
}
