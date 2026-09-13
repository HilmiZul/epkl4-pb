/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Rr8K")

  // remove field
  collection.fields.removeById("_clone_gQZx")

  // remove field
  collection.fields.removeById("_clone_l7e4")

  // remove field
  collection.fields.removeById("_clone_Bzhh")

  // remove field
  collection.fields.removeById("_clone_twcQ")

  // remove field
  collection.fields.removeById("_clone_uxxB")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_3k5z",
    "max": 0,
    "min": 0,
    "name": "nama",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_Ls8b",
    "max": 0,
    "min": 0,
    "name": "alamat",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_jusg",
    "maxSelect": 1,
    "name": "wilayah",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "dalam",
      "luar"
    ]
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_UiRT",
    "max": null,
    "min": null,
    "name": "terisi",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_c5Lg",
    "max": null,
    "min": null,
    "name": "jumlah_kuota",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_lPSO",
    "max": 0,
    "min": 0,
    "name": "catatan",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_yCxX",
    "max": 0,
    "min": 0,
    "name": "prokel",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_Rr8K",
    "max": 0,
    "min": 0,
    "name": "nama",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_gQZx",
    "max": 0,
    "min": 0,
    "name": "alamat",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_l7e4",
    "maxSelect": 1,
    "name": "wilayah",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "dalam",
      "luar"
    ]
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_Bzhh",
    "max": null,
    "min": null,
    "name": "terisi",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_twcQ",
    "max": null,
    "min": null,
    "name": "jumlah_kuota",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_uxxB",
    "max": 0,
    "min": 0,
    "name": "prokel",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_3k5z")

  // remove field
  collection.fields.removeById("_clone_Ls8b")

  // remove field
  collection.fields.removeById("_clone_jusg")

  // remove field
  collection.fields.removeById("_clone_UiRT")

  // remove field
  collection.fields.removeById("_clone_c5Lg")

  // remove field
  collection.fields.removeById("_clone_lPSO")

  // remove field
  collection.fields.removeById("_clone_yCxX")

  return app.save(collection)
})
