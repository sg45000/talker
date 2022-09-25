import { faker } from '@faker-js/faker'

export interface Post {
  id: string
  title: string
  body: string
  archive: boolean
}

export interface Db {
  posts: Post[]
}

export const db: Db = {
  posts: [
    {
      id: 'a2bf2d3d-a7b0-438d-a723-172823f8e30e',
      title: faker.music.songName(),
      body: faker.random.words(5),
      archive: false
    }
  ]
}
