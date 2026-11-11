# Prototype pollution
# CWE-1321 | Severity: HIGH
# File: packages/socket.io/client-dist/socket.io.js line 97

**Risk:** Prototype mutation through user input affects all objects in the process.

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
