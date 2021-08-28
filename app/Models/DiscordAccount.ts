import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DiscordAccount extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public accountName: string

  @column()
  public createdMillis: string
}
