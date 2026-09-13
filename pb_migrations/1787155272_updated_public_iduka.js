/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false\n\torder by prokel, a.nama, terisi, wilayah;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_3gmS")

  // remove field
  collection.fields.removeById("_clone_vOKu")

  // remove field
  collection.fields.removeById("_clone_pvGx")

  // remove field
  collection.fields.removeById("_clone_dYpk")

  // remove field
  collection.fields.removeById("_clone_mNTC")

  // remove field
  collection.fields.removeById("_clone_bmgb")

  // remove field
  collection.fields.removeById("_clone_nLaw")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_udQq",
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
    "id": "_clone_x0p0",
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
    "id": "_clone_fsJT",
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
    "id": "_clone_AXO1",
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
    "id": "_clone_hQ8G",
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
    "id": "_clone_ePPa",
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
    "id": "_clone_BOAd",
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
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, a.catatan, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false\n\torder by prokel, a.nama, terisi;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_3gmS",
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
    "id": "_clone_vOKu",
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
    "id": "_clone_pvGx",
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
    "id": "_clone_dYpk",
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
    "id": "_clone_mNTC",
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
    "id": "_clone_bmgb",
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
    "id": "_clone_nLaw",
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
  collection.fields.removeById("_clone_udQq")

  // remove field
  collection.fields.removeById("_clone_x0p0")

  // remove field
  collection.fields.removeById("_clone_fsJT")

  // remove field
  collection.fields.removeById("_clone_AXO1")

  // remove field
  collection.fields.removeById("_clone_hQ8G")

  // remove field
  collection.fields.removeById("_clone_ePPa")

  // remove field
  collection.fields.removeById("_clone_BOAd")

  return app.save(collection)
})
