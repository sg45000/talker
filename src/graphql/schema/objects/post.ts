import { nonNull, objectType, stringArg } from 'nexus'
import { v4 } from 'uuid'

import { extendType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id')
    t.string('title')
    t.string('body')
    t.boolean('archive')
  }
})

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('allPosts', {
      type: 'Post',
      async resolve(_root, _args, ctx) {
        return await ctx.db.post.findMany()
      }
    })
  }
})

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPost', {
      type: 'Post',
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg())
      },
      async resolve(_root, args, ctx) {
        const newPost = {
          id: v4(),
          title: args.title,
          body: args.body,
          archive: false
        }
        return await ctx.db.post.create({ data: newPost })
      }
    })

    t.nonNull.field('archivePost', {
      type: 'Post',
      args: {
        id: nonNull(stringArg())
      },
      async resolve(_root, arg, ctx) {
        const targetPost = await ctx.db.post.findUnique({ where: { id: arg.id } })
        if (!targetPost) {
          throw new Error('投稿が存在しません。')
        }

        targetPost.archive = true
        return await ctx.db.post.update({ where: { id: arg.id }, data: targetPost })
      }
    })
  }
})
