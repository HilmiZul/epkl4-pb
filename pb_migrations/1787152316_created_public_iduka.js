/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "id": "pbc_423750335",
    "indexes": [],
    "listRule": "",
    "name": "public_iduka",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT a.id, a.nama, a.alamat, a.wilayah, a.terisi, \n\ta.jumlah_kuota, b.nama as prokel FROM iduka a\n\tINNER JOIN program_keahlian b on a.program_keahlian=b.id\n\tWHERE isArchive=false;\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_423750335");

  return app.delete(collection);
})
