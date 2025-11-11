import type { UserSchemaTypes } from "../models/userModel";

declare global {
  namespace Express {
    interface Request {
      user?: UserSchemaTypes;
    }
  }
}
