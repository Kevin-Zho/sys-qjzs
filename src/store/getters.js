export default {
    area: state => state.getarea.area,
    areacode: state => state.getcode.areacode,
    title: state => state.gettitle.title,
    iename: state => state.iename.iename,
    flag: state => state.showflag.showflag,
    ietitle: state => state.ietitle.ietitle,
    search: state => state.showsearch.search,
    showarea: state => state.isshowqg.showqg,
    dearea: state => state.defaultarea.area,
    decode: state => state.defaultcode.code
}