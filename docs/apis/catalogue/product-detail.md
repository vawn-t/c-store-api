# Product Detail

## Sequence Diagram

![image info](./assets/product-details.png)

---

## Get Product's Detail

_Used to get product of system by id._

**URL:** `/api/v1/catalogue/products/:productId/`

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
  "id": 1,
  "categoryId": 1,
  "name": "pineapple",
  "unit": "kg",
  "price": 10,
  "image": "https://via.placeholder.com/150",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
  "quantity": 16,
  "createdAt": "22-04-19 12:00:17",
  "updatedAt": "22-04-19 14:20:00"
}
```

## Error Response

**Condition:** If client send wrong category id

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "errors": ["Item does not exist. It may have been deleted"]
}
```
