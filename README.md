
---

# `reshttp` - HTTP Status Codes and Messages

`reshttp` is a comprehensive object that contains **HTTP status codes** and their **professional messages**. This can be used across your **Node.js/Express** application to standardize error handling and responses in a formal and consistent manner.

## Table of Contents

- [Overview](#overview)
- [Informational Responses (1xx)](#informational-responses-1xx)
- [Success Responses (2xx)](#success-responses-2xx)
- [Redirection Responses (3xx)](#redirection-responses-3xx)
- [Client Error Responses (4xx)](#client-error-responses-4xx)
- [Server Error Responses (5xx)](#server-error-responses-5xx)
- [Usage Example](#usage-example)

## Overview

The `reshttp` object includes all major HTTP status codes, from **1xx** (Informational) to **5xx** (Server Errors), with associated professional messages. These messages are designed to provide clarity and helpful information to both users and developers.
## Installation

### NPM
```bash
npm install reshttp
```
### PNPM
```bash
pnpm add reshttp
```
### YARN
```bash
yarn add reshttp
```
### BUN
```bash
bun add reshttp
```
## Usage

```typescript
import express from "express";
import reshttp from "reshttp";


console.log(reshttp.okMessage)
console.log(reshttp.okCode)

const app = express();

app.get("/example", (req, res) => {
  if (!req.query.id) {
    return res.status(reshttp.badRequestCode).json({status: reshttp.badRequestCode, message: reshttp.badRequestMessage});
  }
  res.status(reshttp.okCode).send(reshttp.okMessage);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this example:
- If `id` is missing in the query, it returns a **400 Bad Request** with a formal message.
- If `id` is provided, it returns a **200 OK** response.

## Informational Responses (1xx)

| **Code** | **Message**                                                                 |
|----------|-----------------------------------------------------------------------------|
| `100`    | Continue: The server has received the request headers and the client may proceed with the request body. |
| `101`    | Switching Protocols: The requester has asked the server to switch protocols. |
| `102`    | Processing: The server has received the request and is processing it, but no response is available yet. |
| `103`    | Early Hints: The server is sending preliminary headers before the final response. |

## Success Responses (2xx)

| **Code** | **Message**                                                                 |
|----------|-----------------------------------------------------------------------------|
| `200`    | OK: The request was successful.                                              |
| `201`    | Created: The request was successful, and a new resource was created.        |
| `202`    | Accepted: The request has been received but has not yet been acted upon.    |
| `203`    | Non-Authoritative Information: The response contains modified metadata not from the origin server. |
| `204`    | No Content: The request was successful, but there is no content to send in the response. |
| `205`    | Reset Content: The server has fulfilled the request and instructs the client to reset the document view. |
| `206`    | Partial Content: The server is delivering only part of the resource due to a range header sent by the client. |

## Redirection Responses (3xx)

| **Code** | **Message**                                                                 |
|----------|-----------------------------------------------------------------------------|
| `300`    | Multiple Choices: The request has multiple possible responses.             |
| `301`    | Moved Permanently: The resource has been moved permanently to a new URL.   |
| `302`    | Found: The resource is temporarily located at a different URL.             |
| `303`    | See Other: The client should retrieve the resource at another URL with a GET request. |
| `304`    | Not Modified: The resource has not been modified since the last request.   |
| `307`    | Temporary Redirect: The resource is temporarily located at a different URL, but the original method should be used. |
| `308`    | Permanent Redirect: The resource has been permanently moved to a new URL, and the original method should be used. |

## Client Error Responses (4xx)

| **Code** | **Message**                                                                 |
|----------|-----------------------------------------------------------------------------|
| `400`    | Bad Request: The server could not understand the request due to invalid syntax. |
| `401`    | Unauthorized: The client must authenticate itself to get the requested response. |
| `402`    | Payment Required: Payment is required to access the resource.              |
| `403`    | Forbidden: The client does not have permission to access the requested resource. |
| `404`    | Not Found: The requested resource was not found on the server.             |
| `405`    | Method Not Allowed: The request method is not allowed for the requested resource. |
| `406`    | Not Acceptable: The server cannot produce a response matching the accept headers sent in the request. |
| `409`    | Conflict: The request could not be processed due to a conflict with the current state of the resource. |
| `410`    | Gone: The requested resource is no longer available on the server.         |
| `411`    | Length Required: The server requires a Content-Length header field in the request. |
| `418`    | I'm a Teapot: The server is a teapot and is not able to brew coffee. |
| `429`    | Too Many Requests: The client has sent too many requests in a given amount of time. |

## Server Error Responses (5xx)

| **Code** | **Message**                                                                 |
|----------|-----------------------------------------------------------------------------|
| `500`    | Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request. |
| `501`    | Not Implemented: The server does not support the functionality required to fulfill the request. |
| `502`    | Bad Gateway: The server received an invalid response from the upstream server. |
| `503`    | Service Unavailable: The server is currently unable to handle the request due to maintenance or overload. |
| `504`    | Gateway Timeout: The server did not receive a timely response from the upstream server. |

## Usage Example

## NOTE: it will work with any JAVASCRIPT framework
Here’s an example of how to use the `reshttp` object in an Express.js route:

## Conclusion

The `reshttp` object helps you keep your status codes and messages organized in a consistent, professional format. You can easily expand or modify the messages as needed for your application.

Feel free to use this structure for **error handling**, **success responses**, and **status codes** throughout your project!

---

Let me know if you need further customization or have additional requests! 😊
