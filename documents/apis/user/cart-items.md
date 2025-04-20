# User's Cart Items

## Sequence Diagram

![image info](./assets/cart-items.png)

---

## Get User's Cart Items

_Used to get user's cart items_

**URL:** `/api/v1/users/:userId/cart-items/`

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
  "cartItems": [
    {
      "id": 1,
      "productId": 4,
      "quantity": 10
    },
    {
      "id": 2,
      "productId": 7,
      "quantity": 5
    }
  ]
}
```

---

## Add User's Cart Item

_Used to add user's cart item_

**URL:** `/api/v1/users/:userId/cart-items/`

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
  "productId": 3,
  "quantity": 1
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

**Condition:** If the user selected out of stock product

**Code:** `200 OK`

**Content:**

```json
{
  "errors": ["Product is out of stock"]
}
```

---

## Update User's Cart Item

_Used to update user's cart item_

**URL:** `/api/v1/users/:userId/cart-items/:cartItemId/`

**Method:** `PATCH`

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
  "quantity": "[quantity in integer number]"
}
```

**Request Data example**

```json
{
  "quantity": 9
}
```

## Success Response

**Condition:** quantity > 0

**Code:** `200 OK`

**Content example**

```json
{
  "id": 1,
  "productId": 4,
  "quantity": 9
}
```

**Condition:** quantity = 0

**Code:** `200 OK`

**Content example**

```json
{}
```

## Error Response

**Condition:** If user send quantity less than 0

**Code:** `400 BAD REQUEST`

**Content:**

```json
{
  "errors": ["Please select a value that is no less than 0"]
}
```

**Condition:** If the user enters a quantity more than the quantity in stock

**Code:** `200 OK`

**Content:**

```json
{
  "errors": ["Product is out of stock"]
}
```

---

## Delete User's Cart Item

_Used to delete user's cart item_

**URL:** `/api/v1/users/:userId/cart-items/:cartItemId/`

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

**Condition:** If client send wrong cart item id

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "errors": ["Item does not exist. It may have been deleted"]
}
```
