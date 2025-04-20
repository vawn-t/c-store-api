# Activate Account

## Sequence Diagram

![image info](./assets/sign-up.png)

---

## User Activate Account

Use token of a registered User to verify phone number.

**URL:** `/api/v1/authentication/activate-account/`

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
  "otp": "[valid OTP]"
}
```

**Request Data example**

```json
{
  "otp": "345126"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{}
```

## Error Response

**Condition:** If 'otp' is not matched with which we sent to user.

**Code:** `400 BAD REQUEST`

**Content:**

```json
{
  "errors": [
    {
      "param": "common",
      "msg": "Invalid code please try agains."
    }
  ]
}
```
