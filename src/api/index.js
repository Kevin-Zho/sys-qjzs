// 首页--全局性
// 搜索框关区数据
export const allArea = () => {
    return new Promise((resovle,reject) => {
        let datas =[
            {sql_key:'SQL_AREA'},
            {queryParam:''}
        ];
        document.addEventListener("deviceready", function () {
        HGRequest.get(baseServer, baseUrl, datas, true, function (res) {
            resovle(res)
        },function (error) {
            console.log("HGRequest ERROR: " + error);
            reject(error)
        });
        }, false);
    })
}

// 记录log日志
export const setlog = (code,page) => {
    return new Promise((resovle,reject) => {
        document.addEventListener("deviceready", function() {
            HGUser.getUserInfo(function (user) {
                let datas = [
                    {uid:user.guid},
                    {uname:user.username},
                    {ucode:user.usercode},
                    {c_code:code},
                    {pageId:page}
                ];
                // 配置log日志开始
                HGRequest.get(baseServer, authUrl + "PageLog", datas, true,function (res) {
                    resovle(res);
                },function (error) {
                    reject(error);
                });
                // 配置log日志结束
            },function (error) {
                console.log("HGUser ERROR: " + error);
            });
          },false);
    })
}