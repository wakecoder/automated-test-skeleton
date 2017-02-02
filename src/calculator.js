module.exports = {
    add: function (lhs, rhs) {
        return lhs + rhs
    },
    subtract: function (lhs, rhs) {
        return lhs - rhs
    },
    multiply: function (lhs, rhs) {
        return lhs + rhs // This is wrong and will be caught by the unit test.
    }
}