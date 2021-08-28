import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Viewer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public createdMillis: string
}
