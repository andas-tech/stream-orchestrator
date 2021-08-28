import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Viewers extends BaseSchema {
  protected tableName = 'Viewers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.integer('createdMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
