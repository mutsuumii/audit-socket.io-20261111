# Security audit: socketio/socket.io

Date: 2026-11-11 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 3 issue(s): 3 high.

## Findings

### 1. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io/client-dist/socket.io.js` line 97

Prototype mutation through user input affects all objects in the process.

```
return t.__proto__ || Object.getPrototypeOf(t);
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 2. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io/client-dist/socket.io.js` line 126

Prototype mutation through user input affects all objects in the process.

```
return t.__proto__ = e, t;
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---

### 3. [HIGH] Prototype pollution

**CWE-1321** | `packages/socket.io/client-dist/socket.io.js` line 3444

Prototype mutation through user input affects all objects in the process.

```
__proto__: null,
```

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
---
