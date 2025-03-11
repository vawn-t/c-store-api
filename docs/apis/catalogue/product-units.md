# Product Units

## Sequence Diagram

![image info](./assets/product-units.png)

---

## Get Product's Unit

_Used to get all unit of product._

**URL:** `/api/v1/catalogue/product-units/`

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
  "productUnits": [
    {
      "id": "1",
      "name": "each"
    },
    {
      "id": "2",
      "name": "kg"
    }
  ]
}
```

---

## Create Product's Unit

_Used to add unit of product_

**URL:** `/api/v1/catalogue/product-units/`

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
  "name": "[name in plain text]"
}
```

**Request Data example**

```json
{
  "name": "each"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 1,
  "name": "each"
}
```

## Error Response

**Condition:** If 'name' is already registered.

**Code:** `409 CONFLICT`

**Content:**

```json
{
  "errors": [
    {
      "param": "name",
      "msg": "Name already registered",
      "location": "body"
    }
  ]
}
```
