import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Segments extends BaseSchema {
  protected tableName = 'Segments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('name')
      table.string('streamTitle')
      table.integer('startMillis')
      table.integer('endMillis')
      table.string('scheduleId')
      table.integer('createdMillis')
      table.integer('updatedMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
