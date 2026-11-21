/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "manageRule": "(\n  @request.auth.collectionName = 'student_users'\n  && id = @request.auth.id\n)\n|| (\n  @request.auth.collectionName = 'teacher_users'\n  && (@request.auth.role = 'admin' || @request.auth.role = 'jurusan')\n)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "manageRule": "@request.auth.collectionName = 'student_users'"
  }, collection)

  return app.save(collection)
})
