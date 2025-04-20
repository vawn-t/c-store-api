# Product's Reviews

## Sequence Diagram

![image info](./assets/reviews.png)

---

## Get Product's Reviews

_Used to get reviews of product_

**URL:** `/api/v1/catalogue/products/:productId/reviews/`

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
  "reviews": [
    {
      "userName": "Haylie Aminoff",
      "userImage": "https://via.placeholder.com/150",
      "rating": 4.5,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    },
    {
      "userName": "Carla Septimus",
      "userImage": "https://via.placeholder.com/150",
      "rating": 4,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
      "createdAt": "22-04-19 12:00:17",
      "updatedAt": "22-04-19 14:20:00"
    }
  ]
}
```

## Error Response

**Condition:** If client send wrong product id

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "errors": ["Item does not exist. It may have been deleted"]
}
```

---

## Add Product's Review

_Used to add review to product_

**URL:** `/api/v1/catalogue/products/:productId/reviews/`

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
  "rating": "[rating in float number]",
  "description": "[description in plain text]"
}
```

**Request Data example**

```json
{
  "rating": 3.5,
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl."
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "userName": "Haylie Aminoff",
  "userImage": "https://via.placeholder.com/150",
  "rating": 3.5,
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque nisl.",
  "createdAt": "22-04-19 12:00:17",
  "updatedAt": "22-04-19 14:20:00"
}
```

## Error Response

**Condition:** If client send wrong product id

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "errors": ["Item does not exist. It may have been deleted"]
}
```
