import { createTestContext } from './__helpers'
import { faker } from '@faker-js/faker'

const ctx = createTestContext()

describe('createPost mutation', () => {
  it('mutation実行でdbにデータが追加される', async () => {
    const variable = {
      title: faker.hacker.abbreviation(),
      body: faker.random.words(10)
    }
    const result = await ctx.client.request(
      `
      mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
          id
          title
          body
          archive
        }
      }
    `,
      variable
    )
    expect(result.createPost.title).toBe(variable.title)
    expect(result.createPost.body).toBe(variable.body)
  })
})

describe('archivePost mutation', () => {
  it('mutation実行でdbのデータが変更される', async () => {
    const variable = {
      archivePostId: 'a2bf2d3d-a7b0-438d-a723-172823f8e30e'
    }
    const result = await ctx.client.request(
      `
      mutation ArchivePost($archivePostId: String!) {
        archivePost(id: $archivePostId) {
          id
          title
          body
          archive
        }
      }
    `,
      variable
    )
    expect(result.archivePost.id).toBe(variable.archivePostId)
    expect(result.archivePost.archive).toBeTruthy()
  })
})
