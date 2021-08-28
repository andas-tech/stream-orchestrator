import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contents extends BaseSchema {
  protected tableName = 'Content'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('title')
      table.string('description')
      table.string('streamProviderId')
      table.string('segmentId')
      table.integer('createdMillis')
      table.integer('updatedMillis')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
