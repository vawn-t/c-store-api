# Orders

## Sequence Diagram

![image info](./assets/orders.png)

---

## Get Orders

_Used to get all orders or current user_

**URL:** `/api/v1/users/:userId/orders/`

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
  "orders": [
    {
      "id": 1,
      "addressId": 1,
      "shippingMethodId": 1,
      "paymentMethodId": 1,
      "total": 10,
      "orderStatuses": [1, 2, 3]
    },
    {
      "id": 2,
      "addressId": 1,
      "shippingMethodId": 1,
      "paymentMethodId": 1,
      "total": 15,
      "orderStatuses": [4, 5]
    }
  ]
}
```

---

## Add Order

_Used to add order_

**URL:** `/api/v1/users/:userId/orders/`

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
  "addressId": "[valid addressId]",
  "shippingMethodId": "[valid shippingMethodId]",
  "paymentMethodId": "[valid paymentMethodId]"
}
```

**Request Data example**

```json
{
  "addressId": 2,
  "shippingMethodId": 2,
  "paymentMethodId": 2
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 3,
  "addressId": 2,
  "shippingMethodId": 2,
  "paymentMethodId": 2,
  "total": 20,
  "orderStatuses": [6]
}
```

---

## Update Order

_Used to update order_

**URL:** `/api/v1/users/:userId/orders/:orderId/`

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
  "addressId": "[valid addressId]",
  "shippingMethodId": "[valid shippingMethodId]",
  "paymentMethodId": "[valid paymentMethodId]"
}
```

**Request Data example**

```json
{
  "addressId": 1,
  "shippingMethodId": 1,
  "paymentMethodId": 1
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 3,
  "addressId": 1,
  "shippingMethodId": 1,
  "paymentMethodId": 1,
  "total": 20,
  "orderStatuses": [6, 7]
}
```
