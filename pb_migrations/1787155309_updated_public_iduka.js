/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false\n\torder by prokel, a.terisi, a.wilayah;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_5grN")

  // remove field
  collection.fields.removeById("_clone_cRoe")

  // remove field
  collection.fields.removeById("_clone_Nymn")

  // remove field
  collection.fields.removeById("_clone_Fdjt")

  // remove field
  collection.fields.removeById("_clone_E4v0")

  // remove field
  collection.fields.removeById("_clone_n5fm")

  // remove field
  collection.fields.removeById("_clone_LOxd")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false\n\torder by prokel, a.nama, a.terisi, a.wilayah;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_5grN",
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
    "id": "_clone_cRoe",
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
    "id": "_clone_Nymn",
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
    "id": "_clone_Fdjt",
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
    "id": "_clone_E4v0",
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
    "id": "_clone_n5fm",
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
    "id": "_clone_LOxd",
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

  return app.save(collection)
})
