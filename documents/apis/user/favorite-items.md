# User's Favorite Items

## Sequence Diagram

![image info](./assets/favorite-items.png)

---

## Get User's Favorite Items

_Used to get user's favorite items_

**URL:** `/api/v1/users/:userId/favorite-items/`

**Method:** `GET`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "favoriteItems": [
    {
      "id": 1,
      "productId": 4
    },
    {
      "id": 2,
      "productId": 7
    }
  ]
}
```

---

## Add User's Favorite Item

_Used to add user's favorite item_

**URL:** `/api/v1/users/:userId/favorite-items/`

**Method:** `POST`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**Request Data constraints**

```json
{
  "productId": "[valid productId]"
}
```

**Request Data example**

```json
{
  "productId": 3
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 3,
  "productId": 3
}
```

## Error Response

**Condition:** If "product" is already selected.

**Code:** `409 CONFLICT`

**Content:**

```json
{
  "errors": ["Product already selected"]
}
```

---

## Delete User's Favorite Item

_Used to delete user's favorite item_

**URL:** `/api/v1/users/:userId/favorite-items/:favoriteItemId/`

**Method:** `DELETE`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{}
```

## Error Response

**Condition:** If client send wrong favorite item id

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "errors": ["Item does not exist. It may have been deleted"]
}
```
