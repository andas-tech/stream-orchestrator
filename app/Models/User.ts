import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public username: string

  @column()
  public passwordHash: string

  @column()
  public salt: string

  @column()
  public createdMillis: number

  @column()
  public updatedMillis: number
}
