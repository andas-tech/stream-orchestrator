import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Streamproviders extends BaseSchema {
  protected tableName = 'StreamProviders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('title')
      table.string('description')
      table.integer('createdMillis')
      table.integer('updatedMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
