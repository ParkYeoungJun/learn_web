function add(a, b)
{
    return a + b;
}

var json = {
    id : 'abc',
    pw : '123'
};

module.exports = add;
module.exports.json = json;
// 그냥 exports도 됨, 상하위 관계가 있음
// module.exports.m = json; 가능 호출할 대 custom.m.id