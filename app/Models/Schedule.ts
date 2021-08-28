import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public startMillis: number

  @column()
  public endMillis: number

  @column()
  public createdMillis: number

  @column()
  public updatedMillis: number
}
