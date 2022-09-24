import { enumType, objectType } from 'nexus'

export const Gender = enumType({
  name: 'Gender',
  members: ['MALE', 'FEMALE', 'UNKNOWN'],
  description: '性別'
})

export const Member = objectType({
  name: 'Member',
  definition(t) {
    t.string('firstName', { description: '名' })
    t.string('lastName', { description: '姓' })
    t.field('gender', { type: Gender, description: '性別' })
    t.string('email', { description: 'メールアドレス' })
  }
})
