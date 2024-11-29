
const messages = {
  // General Errors
  ERROR: "Something went wrong. Please try again.",
  SUCCESS: "Operation was successful.",

  // Client Errors
  NOT_FOUND: "The requested resource was not found.",
  BAD_REQUEST: "The request could not be understood or was missing required parameters.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  FORBIDDEN: "You do not have permission to access this resource.",
  TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  VALIDATION_FAILED: "Validation failed. Please check your input and try again.",
  CONFLICT: "Conflict occurred. The resource already exists.",
  PAYMENT_REQUIRED: "Payment is required to proceed.",
  GONE: "The requested resource is no longer available.",

  // Server Errors
  INTERNAL_SERVER_ERROR: "The server encountered an internal error. Please try again later.",
  SERVICE_UNAVAILABLE: "The service is temporarily unavailable. Please try again later.",
  GATEWAY_TIMEOUT: "The server took too long to respond. Please try again later.",

  // Authentication & Authorization
  LOGIN_SUCCESS: "Logged in successfully.",
  LOGIN_FAILED: "Invalid username or password.",
  LOGOUT_SUCCESS: "Logged out successfully.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",

  // OTP and Rate Limiting
  OTP_SENT: "OTP has been sent successfully.",
  OTP_ALREADY_SENT: "OTP already sent. Please try again after 1 minute.",
  INVALID_OTP: "The OTP entered is invalid or expired.",
  RATE_LIMIT_EXCEEDED: "You have exceeded the maximum number of requests. Please try again later.",

  // File Upload & Download
  FILE_UPLOAD_SUCCESS: "File uploaded successfully.",
  FILE_UPLOAD_FAILED: "File upload failed. Please try again.",
  FILE_NOT_FOUND: "The requested file was not found.",

  // Resource-Specific
  RESOURCE_CREATED: "The resource was created successfully.",
  RESOURCE_UPDATED: "The resource was updated successfully.",
  RESOURCE_DELETED: "The resource was deleted successfully.",

  // Generic
  WELCOME: "Welcome to our API!",
  GOODBYE: "Thank you for using our service."
};
export default messages
export type MessageKey = keyof typeof messages;
