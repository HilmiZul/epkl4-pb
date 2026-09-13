/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE a.isArchive=false and a.terisi < a.jumlah_kuota\n\torder by prokel, a.terisi, a.wilayah;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Yu5Z")

  // remove field
  collection.fields.removeById("_clone_qLHz")

  // remove field
  collection.fields.removeById("_clone_AeGp")

  // remove field
  collection.fields.removeById("_clone_AjvT")

  // remove field
  collection.fields.removeById("_clone_TSbr")

  // remove field
  collection.fields.removeById("_clone_I7mq")

  // remove field
  collection.fields.removeById("_clone_KXKh")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_6GKE",
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
    "id": "_clone_1Ujn",
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
    "id": "_clone_0Xiu",
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
    "id": "_clone_nIhC",
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
    "id": "_clone_IZg7",
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
    "id": "_clone_b3XS",
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
    "id": "_clone_7sXm",
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
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false\n\torder by prokel, a.terisi, a.wilayah;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_Yu5Z",
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
    "id": "_clone_qLHz",
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
    "id": "_clone_AeGp",
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
    "id": "_clone_AjvT",
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
    "id": "_clone_TSbr",
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
    "id": "_clone_I7mq",
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
    "id": "_clone_KXKh",
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
  collection.fields.removeById("_clone_6GKE")

  // remove field
  collection.fields.removeById("_clone_1Ujn")

  // remove field
  collection.fields.removeById("_clone_0Xiu")

  // remove field
  collection.fields.removeById("_clone_nIhC")

  // remove field
  collection.fields.removeById("_clone_IZg7")

  // remove field
  collection.fields.removeById("_clone_b3XS")

  // remove field
  collection.fields.removeById("_clone_7sXm")

  return app.save(collection)
})
