import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StreamProvider extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public createdMillis: string

  @column()
  public updatedMillis: string
}
