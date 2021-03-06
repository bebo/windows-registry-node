var ref = require('ref');

var types = {
    REGSAM: ref.types.uint64,
    DWORD: ref.types.uint32,
    ULONG: ref.types.uint32,
    HWND: ref.refType(ref.types.void),
    BYTE: ref.types.uint8,
    HKEY: ref.refType(ref.types.void),
    PVOID: ref.refType('pointer'),
    HANDLE: ref.refType(ref.types.void),
    HINSTANCE: ref.refType(ref.types.void),
    LPCTSTR: ref.refType(ref.types.CString),
    STRING: ref.types.CString,
    INT: ref.types.int32,
    LPVOID: ref.refType(ref.types.void)
};

types.PHKEY = ref.refType(types.HKEY);
types.LPBYTE = ref.refType(types.BYTE);
types.LPDWORD = ref.refType(types.DWORD);
module.exports = types;
