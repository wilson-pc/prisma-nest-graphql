"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDistinctFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var UserDistinctFieldEnum;
(function (UserDistinctFieldEnum) {
    UserDistinctFieldEnum["id"] = "id";
    UserDistinctFieldEnum["createdAt"] = "createdAt";
    UserDistinctFieldEnum["email"] = "email";
    UserDistinctFieldEnum["name"] = "name";
    UserDistinctFieldEnum["roleId"] = "roleId";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
TypeGraphQL.registerEnumType(UserDistinctFieldEnum, {
    name: "UserDistinctFieldEnum",
    description: undefined,
});
//# sourceMappingURL=UserDistinctFieldEnum.js.map