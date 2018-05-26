import jsonp from "fetch-jsonp"

export const getNav = (cb) => {

    jsonp("http://datainfo.duapp.com/shopdata/getGoods.php").then(r => r.json()).then(data=>{

        var newData = data.map(navs => {
            var obj = {
                navsID: navs.className
            }
            return obj;
        })
        cb(newData);
    })
}

export const getBanner = cb => {
    jsonp("http://datainfo.duapp.com/shopdata/getBanner.php").then(r => r.json()).then(data=>{
        var  newData = data.map(goods => {
            var obj = {
                goodsID: goods.goodsID,
                imgSrc:JSON.parse(goods.goodsBenUrl)[0]
            }
            return obj;
        })
        cb(newData);
    })
}
export const getGoods = cb => {
    jsonp("http://datainfo.duapp.com/shopdata/getGoods.php").then(r => r.json()).then(data => {
        let newList = data.map(goods => {
            let discount = goods.discount == 0 ? 10 : goods.discount * 1;
            let obj = {
                goodsID: goods.goodsID,
                goodsName: goods.goodsName,
                price: goods.price,
                oldPrice: goods.price  * 10 / discount,
                discount,
                imgSrc: goods.goodsListImg
            }
            obj.price *= 1;
            obj.price = obj.price.toFixed(2);
            obj.oldPrice = obj.oldPrice.toFixed(2);
            return obj;
        })
        cb(newList)
    })
}
export const getGoodsById = (cb, goodsID) => {
    jsonp(`http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=${goodsID}`).then(r => r.json()).then(data => {
        data = data[0];
        let {goodsName, price, discount, detail, goodsBenUrl} = data;
        let list = JSON.parse(goodsBenUrl).map(url => {
            return{imgSrc: url}
        });
        discount = discount == 0 ? 10 : discount * 1;
        price *= 1;
        let oldPrice = price * 10 / discount;

        price = price.toFixed(2);
        oldPrice = oldPrice.toFixed(2);
        let goods = {
            goodsName,
            price,
            discount,
            detail,
            list,
            oldPrice
        }
        cb(goods)
    })
}
















//
