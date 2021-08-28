import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Schedules extends BaseSchema {
  protected tableName = 'Schedules'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.integer('startMillis')
      table.integer('endMillis')
      table.integer('createdMillis')
      table.integer('updatedMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
